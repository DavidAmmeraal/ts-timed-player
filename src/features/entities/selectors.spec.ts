/**
 * selectors.spec.ts
 * Unit tests for selectors.
 */
import Types from 'Types';
import {
  createEntitiesContainerSelector,
  createEntitySelector,
  createAllEntitiesSelector,
} from './selectors';
import { mergeDeepRight, dissocPath } from 'ramda';
import { reducer as rootReducer } from '../../store/reducer';

describe('selector creators', () => {
  let state: Types.RootState;

  beforeEach(() => {
    state = mergeDeepRight(rootReducer(undefined, <any>{}), {
      entities: {
        Foo: {
          ids: ['2', '1'],
          byId: {
            '1': {
              foo: 'bar',
            },
            '2': {
              foo: 'foo',
            },
          },
        },
        Bar: {
          ids: ['2'],
          byId: {
            '2': {
              bar: 'foo',
            },
          },
        },
      },
    });
  });

  describe('createEntitiesContainerSelector()', () => {
    let selector: ReturnType<typeof createEntitiesContainerSelector>;

    beforeEach(() => {
      selector = createEntitiesContainerSelector('Foo');
    });

    describe('when selecting an entities container from the rootstate', () => {
      it('should return an object containing the ids, and the entities by id for the given type', () => {
        const entities = state.entities.Foo;
        expect(selector(state)).toBe(entities);
      });

      it('should not recalculate return value when called again if targeted part of state has not changed', () => {
        const entities = state.entities.Foo;
        const newState = dissocPath<Types.RootState>(['entities', 'Bar'], state);
        selector(state);
        expect(selector.recomputations()).toBe(1);
        expect(selector(newState)).toBe(entities);
        expect(selector.recomputations()).toBe(1);
      });

      it('should return undefined if there is no entities container', () => {
        const newState = dissocPath<Types.RootState>(['entities', 'Foo'], state);
        expect(selector(newState)).toBe(undefined);
      });

      describe('and when targeted entities container has changed and selector is called again', () => {
        let newState: Types.RootState;

        beforeEach(() => {
          selector(state);
          newState = dissocPath(['entities', 'Foo', 'byId', '1'], state);
        });

        it('should return the changed target', () => {
          expect(selector(newState)).toBe(newState.entities.Foo);
        });

        it('should recalculate return value if relevant state has changed', () => {
          expect(selector.recomputations()).toBe(1);
          selector(newState);
          expect(selector.recomputations()).toBe(2);
        });
      });
    });
  });

  describe('createAllEntitiesSelector()', () => {
    let selector: ReturnType<typeof createAllEntitiesSelector>;

    beforeEach(() => {
      selector = createAllEntitiesSelector('Foo');
    });

    describe('when calling the selector with a state', () => {
      it('should return an array containing all the entities ordered by the ids', () => {
        const expectedResult = state.entities.Foo.ids.map(id => state.entities.Foo.byId[id]);
        expect(selector(state)).toEqual(expectedResult);
      });

      it('should not recalculate if any of the entities has not changed', () => {
        selector(state);
        expect(selector.recomputations()).toBe(1);
        const newState = dissocPath<Types.RootState>(['entities', 'Bar', 'byId', '2'], state);
        selector(newState);
        expect(selector.recomputations()).toBe(1);
      });

      describe('when entities container for given type has changed', () => {

        let newState:Types.RootState;

        beforeEach(() => {
          newState = dissocPath<Types.RootState>(['entities', 'Foo', 'byId', '2'], state);
        });

        it('should recalculate the return value', () => {
          selector(state);
          expect(selector.recomputations()).toBe(1);
          selector(newState);
          expect(selector.recomputations()).toBe(2);
        });

        it('should return a new list of all the entities', () => {
          const expectedResult = newState.entities.Foo.ids.map(id => newState.entities.Foo.byId[id]);
          expect(selector(newState)).toEqual(expectedResult);
        });
      });

      it('should return an empty array if there are no entities', () => {
        const newState = dissocPath<Types.RootState>(['entities', 'Foo'], state);
        expect(selector(newState)).toEqual([]);
      });
    });
  });

  describe('createEntitySelector()', () => {
    let selector: ReturnType<typeof createEntitySelector>;
    const inputProps = { id: '1' };

    beforeEach(() => {
      selector = createEntitySelector('Foo', (s, props: typeof inputProps) => props.id);
    });
    describe('when trying to get an entity with an existing id', () => {
      it('should return the entity of the given type and id from the state', () => {
        const expected = state.entities.Foo.byId['1'];
        expect(selector(state, inputProps)).toBe(expected);
      });

      it('should not recalculate if entity with id has not changed', () => {
        selector(state, inputProps);
        expect(selector.recomputations()).toBe(1);
        const newState = mergeDeepRight(state, {
          entities: { Foo: { byId: { '2': { foo: 'bar' } } } },
        });
        selector(newState, inputProps);
        expect(selector.recomputations()).toBe(1);
      });

      describe('when entity has changed', () => {
        let newState: Types.RootState;
        const newEntity = { foo: 'foo' };

        beforeEach(() => {
          newState = mergeDeepRight(state, { entities: { Foo: { byId: { '1': newEntity } } } });
        });
        it('should return new entity', () => {
          expect(selector(newState, inputProps)).toEqual(newEntity);
        });

        it('should recalculate if entity with id has changed', () => {
          selector(state, inputProps);
          expect(selector.recomputations()).toBe(1);
          selector(newState, inputProps);
          expect(selector.recomputations()).toBe(2);
        });

        it('should recalculate if return value of id selector has changed', () => {
          selector(state, inputProps);
          expect(selector.recomputations()).toBe(1);
          selector(newState, { id: '2' });
          expect(selector.recomputations()).toBe(2);
        });
      });
    });

    describe('when trying to get an entity with a non-existing id', () => {
      const newInputProps = { id: '3' };
      it('should return undefined', () => {
        expect(selector(state, newInputProps)).toBe(undefined);
      });
    });
  });
});
