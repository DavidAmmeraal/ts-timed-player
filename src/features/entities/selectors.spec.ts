import { createEntitiesSelector } from './selectors';

const state = {
    Foo: {
        ids: ['1', '2'],
        byId: {
            '1': {
                id: '1',
                foo: 'bar',
            },
            '2': {
                id: '2',
                foo: 'foo',
            }
        }
    }
}

describe('createEntitiesSelector()', () => {

    it('should return the ids, and the entities by id a given type', () => {
        const entities = state.Foo;
        const selector = createEntitiesSelector('Foo');
        expect(selector(state)).toBe(entities);
    })
})