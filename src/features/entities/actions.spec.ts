/**
 * actions.spec.ts
 * Unit tests entities action creators.
 */
import * as actions from './actions';

describe('createEntityAction()', () => {
  it('should create a new CREATE action.', () => {
    const action = actions.createEntityAction('TestEntity', { id: '1', foo: 'bar' });
    expect(action).toMatchSnapshot();
  });
});

describe('updateEntityAction()', () => {
  it('should create a new UPDATE action.', () => {
    const action = actions.updateEntityAction('X', '123', { foo: 'bar' });
    expect(action).toMatchSnapshot();
  });
});

describe('deleteEntityAction()', () => {
  it('should create a new DELETE action.', () => {
    const action = actions.deleteEntityAction('X', '123');
    expect(action).toMatchSnapshot();
  });
});
