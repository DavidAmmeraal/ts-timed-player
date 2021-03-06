/**
 * reducer.spec.ts
 * Contains unit tests for entities reduce.
 */
import { reducer } from './reducer';
import * as actions from './actions';
import { EntitiesState } from './index';

describe('entities reducer', () => {
  let initialState:EntitiesState;

  beforeEach(() => {
    initialState = reducer(undefined, <any>{});
  });

  it('should have empty initial state', () => {
    expect(initialState).toEqual({});
  });
  describe('handling CREATE action', () => {
    it(`should create a new entity of given entityType,
 and create a new entityType container if it does not exist.`, () => {
      const id = '123';
      const entity = { id, foo: 'bar' };
      const action = actions.createEntityAction('SuperCoolEntity', entity);
      const state = reducer(initialState, action);
      expect(state.SuperCoolEntity.byId).toHaveProperty(id, entity);
      expect(state.SuperCoolEntity.ids).toContain(id);
    });

    it('should create a new entity of given entityType and add it to the existing entityType container.', () => {
      const idA = '123';
      const entityA = { id: idA, foo: 'bar' };
      const actionA = actions.createEntityAction('SuperCoolEntity', entityA);
      const state = reducer(initialState, actionA);

      const idB = '321';
      const entityB = { id: idB, bar: 'foo' };
      const actionB = actions.createEntityAction('SuperCoolEntity', entityB);

      const finalState = reducer(state, actionB);
      expect(finalState.SuperCoolEntity.byId).toHaveProperty(idA, entityA);
      expect(finalState.SuperCoolEntity.ids).toContain(idA);
      expect(finalState.SuperCoolEntity.byId).toHaveProperty(idB, entityB);
      expect(finalState.SuperCoolEntity.ids).toContain(idB);
    });

    it('should create a new entity of new entityType and add it next to other types.', () => {
      const superCoolId = '123';
      const superCoolEntity = { id: superCoolId, foo: 'bar' };
      const superCoolAction = actions.createEntityAction('SuperCoolEntity', superCoolEntity);
      const state = reducer(initialState, superCoolAction);

      const superLameId = '432';
      const superLameEntity = { id: superLameId, bar: 'foo' };
      const superLameAction = actions.createEntityAction('SuperLameEntity', superLameEntity);

      const finalState = reducer(state, superLameAction);
      expect(finalState.SuperCoolEntity.byId).toHaveProperty(superCoolId, superCoolEntity);
      expect(finalState.SuperCoolEntity.ids).toContain(superCoolId);

      expect(finalState.SuperLameEntity.byId).toHaveProperty(superLameId, superLameEntity);
      expect(finalState.SuperLameEntity.ids).toContain(superLameId);
    });

    it('should overwrite existing entities of same entityType if it has same id.', () => {
      const id = '123';
      const entityA = { id, foo: 'bar', bar: 'foo' };
      const actionA = actions.createEntityAction('SuperCoolEntity', entityA);
      const state = reducer(initialState, actionA);

      const entityB = { id, foo: 'foo' };
      const actionB = actions.createEntityAction('SuperCoolEntity', entityB);

      const finalState = reducer(state, actionB);
      expect(finalState.SuperCoolEntity.byId).toHaveProperty(id, entityB);
    });
  });

  describe('handling UPDATE action', () => {
    let state = { ...initialState };
    const idA = '123';
    const idB = '321';
    const entityA = { id: idA, foo: 'foo', bar: 'bar' };
    const entityB = { id: idB, foo: 'bar', bar: 'foo' };

    beforeEach(() => {
      const createActionA = actions.createEntityAction('SuperCoolEntity', entityA);
      const stateA = reducer(initialState, createActionA);
      const createActionB = actions.createEntityAction('SuperCoolEntity', entityB);
      state = reducer(stateA, createActionB);
    });

    it('should update existing entity of given entityType (only) with given id.', () => {
      const newProps = { id: idA, foo: 'foo' };
      const updateAction = actions.updateEntityAction('SuperCoolEntity', newProps);

      const finalState = reducer(state, updateAction);
      expect(finalState.SuperCoolEntity.byId).toHaveProperty(idA, { ...entityA, ...newProps });
      expect(finalState.SuperCoolEntity.byId).toHaveProperty(idB, entityB);
    });

    it('should do nothing for non-existing id.', () => {
      const newProps = { id: '124', foo: 'foo' };
      const updateAction = actions.updateEntityAction('SuperCoolEntity', newProps);

      const finalState = reducer(state, updateAction);
      expect(finalState).toEqual(state);
    });
  });

  describe('handling DELETE action', () => {
    let state = { ...initialState };
    const idA = '123';
    const idB = '321';
    const entityA = { id: idA, foo: 'bar', bar: 'foo' };
    const entityB = { id: idB, foo: 'bar', bar: 'foo' };

    beforeEach(() => {
      const createActionA = actions.createEntityAction('SuperCoolEntity', entityA);
      const stateA = reducer(initialState, createActionA);
      const createActionB = actions.createEntityAction('SuperCoolEntity', entityB);
      state = reducer(stateA, createActionB);
    });

    it('should delete an existing entity of given entityType with given id.', () => {
      const deleteAction = actions.deleteEntityAction('SuperCoolEntity', idA);
      const finalState = reducer(state, deleteAction);
      expect(finalState.SuperCoolEntity.byId).not.toHaveProperty(idA);
      expect(finalState.SuperCoolEntity.ids).not.toContain(idA);
      expect(finalState.SuperCoolEntity.byId).toHaveProperty(idB, entityB);
      expect(finalState.SuperCoolEntity.ids).toContain(idB);
    });

    it('should do nothing for non-existing id.', () => {
      const updateAction = actions.deleteEntityAction('SuperCoolEntity', '124');
      const finalState = reducer(state, updateAction);
      expect(finalState).toEqual(state);
    });
  });
});
