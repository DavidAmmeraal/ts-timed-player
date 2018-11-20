/**
 * actions.spec.ts
 * Unit tests entities action creators.
 */
import * as actions from './actions';

describe('createEntityAction()', () => {
  it('should create a new CREATE action.', () => {
    const props = { id: '1', foo: 'bar', bar: 'foo' };
    const entityType = 'TestEntity';
    const action = actions.createEntityAction(entityType, props);
    expect(action).toMatchObject({
      type: 'entities/CREATE_ENTITY',
      payload: {
        entityType,
        props,
      },
    });
  });
});

describe('updateEntityAction()', () => {
  it('should create a new UPDATE action.', () => {
    const props = { foo: 'foo', id: '1' };
    const entityType = 'TestEntity';
    const action = actions.updateEntityAction(entityType, props);
    expect(action).toMatchObject({
      type: 'entities/UPDATE_ENTITY',
      payload: {
        entityType,
        props,
      },
    });
  });
});

describe('deleteEntityAction()', () => {
  it('should create a new DELETE action.', () => {
    const entityType = 'TestEntity';
    const id = '123';
    const action = actions.deleteEntityAction('TestEntity', '123');
    expect(action).toMatchObject({
      type: 'entities/DELETE_ENTITY',
      payload: {
        id,
        entityType,
      },
    });
  });
});
