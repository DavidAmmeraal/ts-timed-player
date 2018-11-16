import Types from 'Types';
/**
 * actions.spec.ts
 * Unit tests entities action creators.
 */
import * as actions from './actions';
import * as constants from './constants';

interface TestEntityProps extends Types.EntityProps {
  foo: string,
  bar: string,
}

type TestEntity = Types.Entity<'TestEntity', TestEntityProps>;

describe('createEntityAction()', () => {
  it('should create a new CREATE action.', () => {
    const props = { foo: 'bar', bar: 'foo' };
    const id = '1';
    const type = 'TestEntity'; 
    const action = actions.createEntityAction<TestEntity>({type, id, props});
    expect(action).toMatchObject({
      type: constants.CREATE_ENTITY,
      payload: {
        id,
        type,
        props,
      }
    })
  });
});

describe('updateEntityAction()', () => {
  it('should create a new UPDATE action.', () => {
    const action = actions.updateEntityAction<TestEntity>({type: 'TestEntity', id: '1', props: { bar: 'bar' }});
    expect(action).toMatchSnapshot();
  });
});

describe('deleteEntityAction()', () => {
  it('should create a new DELETE action.', () => {
    const action = actions.deleteEntityAction('X', '123');
    expect(action).toMatchSnapshot();
  });
});
