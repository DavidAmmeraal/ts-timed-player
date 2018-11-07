/**
 * selectors.spec.ts
 * Unit tests for selectors.
 */
import { createEntitiesContainerSelector, createEntitySelector } from './selectors';
import { reducer } from './reducer';
import { deleteEntityAction, updateEntityAction } from './actions';

const state = {
  Foo: {
    ids: ['1', '2'],
    byId: {
      1: {
        id: '1',
        foo: 'bar',
      },
      2: {
        id: '2',
        foo: 'foo',
      },
    },
  },
  Bar: {
    ids: ['1'],
    byId: {
      1: {
        id: '1',
        bar: 'foo',
      },
    },
  },
};

describe('createEntitiesContainerSelector()', () => {
  it('should return the ids, and the entities by id a given type', () => {
    const entities = state.Foo;
    const selector = createEntitiesContainerSelector('Foo');
    expect(selector(state)).toBe(entities);
  });

  it('should not recalculate return value if relevant state has not changed', () => {
    const entities = state.Foo;
    const selector = createEntitiesContainerSelector('Foo');
    expect(selector(state)).toBe(entities);

    // removing "Bar", should not trigger a recalculation
    const deleteAction = deleteEntityAction('Bar', '1');
    const newState = reducer(state, deleteAction);

    expect(selector(newState)).toBe(entities);
    expect(selector.recomputations()).toBe(1);
  });

  it('should recalculate return value if relevant state has changed', () => {
    const entities = state.Foo;
    const selector = createEntitiesContainerSelector('Foo');
    expect(selector(state)).toBe(entities);

    // removing a "Foo", should trigger a recalculation
    const deleteAction = deleteEntityAction('Foo', '1');
    const newState = reducer(state, deleteAction);
    selector(newState);
    expect(selector.recomputations()).toBe(2);
  });
});

describe('createEntitySelector()', () => {
  it('should select an entity of given type and id', () => {
    const entity = state.Foo.byId['1'];
    const selector = createEntitySelector('Foo', '1');
    expect(selector(state)).toBe(entity);
  });

  it('should not recalculate if state of entity has not changed', () => {
    const updateAction = updateEntityAction('Foo', '2', { foo: 'bar' });
    const selector = createEntitySelector('Foo', '1');
    selector(state);
    expect(selector.recomputations()).toBe(1);
    const newState = reducer(state, updateAction);
    selector(newState);
    expect(selector.recomputations()).toBe(1);
  });

  it('should recalculate if state of entity has changed, and retrieve the updated entity', () => {
    const updateAction = updateEntityAction('Foo', '1', { foo: 'foo' });
    const expectedUpdatedEntity = { id: '1', foo: 'foo' };
    const selector = createEntitySelector('Foo', '1');
    selector(state);
    expect(selector.recomputations()).toBe(1);
    const newState = reducer(state, updateAction);
    const result = selector(newState);
    expect(result).toEqual(expectedUpdatedEntity);
    expect(selector.recomputations()).toBe(2);
  });
});
