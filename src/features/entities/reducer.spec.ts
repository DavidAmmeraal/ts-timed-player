import reducer from './reducer';
import * as actions from './actions';

/**
 * FIXTURES
 */
const initialState = reducer(undefined, {} as any);

describe('models reducer', () => {
    it('should have empty initial state', () => {
        expect(initialState).toMatchSnapshot();
    })
    describe('handling CREATE action', () => {
        it('should create a new entity of given type, and create a new type container if it does not exist.', () => {
            const entity = { id: '123', foo: 'bar' };
            const action = actions.createEntityAction('SuperCoolEntity', entity);
            const state = reducer(undefined, action);
            expect(state).toMatchSnapshot();
        })

        it('should create a new entity of given type and add it to the existing type container.', () => {
            const entity1 = { id: '123', foo: 'bar' };
            const action1 = actions.createEntityAction('SuperCoolEntity', entity1);
            const state = reducer(undefined, action1);

            const entity2 = { id: '432', bar: 'foo' };
            const action2 = actions.createEntityAction('SuperCoolEntity', entity2);

            const finalState = reducer(state, action2);
            expect(finalState).toMatchSnapshot();
        })

        it('should create a new entity of new type and add it next to other types.', () => {
            const superCoolEntity = { id: '123', foo: 'bar' };
            const superCoolAction = actions.createEntityAction('SuperCoolEntity', superCoolEntity);
            const state = reducer(undefined, superCoolAction);

            const superLameEntity = { id: '432', bar: 'foo' };
            const superLameAction = actions.createEntityAction('SuperLameEntity', superLameEntity);

            const finalState = reducer(state, superLameAction);
            expect(finalState).toMatchSnapshot();
        })

        it('should overwrite existing entities of same type if it has same id.', () => {
            const superCoolEntity = { id: '123', foo: 'bar', bar: 'foo' };
            const superCoolAction = actions.createEntityAction('SuperCoolEntity', superCoolEntity);
            const state = reducer(undefined, superCoolAction);

            const superCoolEntity2 = { id: '123', foo: 'foo' }
            const superCoolAction2 = actions.createEntityAction('SuperCoolEntity', superCoolEntity2);

            const finalState = reducer(state, superCoolAction2);
            expect(finalState).toMatchSnapshot();
        })
    })
    
});