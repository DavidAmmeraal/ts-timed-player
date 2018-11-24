/**
 * selectors.ts
 * Contains the selectors to get data from the entities state.
 */
import { createSelector } from 'reselect';
import { EntitiesState } from './reducer';

/**
 * Selects the entities container for a given entity type.
 *
 * @param entityType The name of the entity container.
 */
export const createEntitiesContainerSelector = (entityType: string) =>
    createSelector((state: EntitiesState) => state[entityType], typeEntities => typeEntities);

/**
 * Selects all the entities of a given entity type as an array, ordered by the array of ids in the EntityContainer.
 *
 * @param entityType The name of the entity container.
 */
export const createAllEntitiesSelector = (entityType: string) =>
    createSelector(
        createEntitiesContainerSelector(entityType),
        entitiesContainer => entitiesContainer.ids.map(id => entitiesContainer.byId[id])
    );

/**
 * Creates a memoized selector an entity by Id. If either the return value of the id selector,
 * or the entity associated with the returned id changes, a new value will be recomputed.
 * @param entityType The name of the entity type.
 * @param idSelector Returns the id of the entity to be retrieved.
 */
export const createEntitySelector =
    <P = any>(entityType: string, idSelector: (state:EntitiesState, props:P) => string) => {
    return createSelector(
        (s:EntitiesState, p:P) => {
            const id = idSelector(s, p);
            return s[entityType].byId[id];
        },
        (entity) => entity,
    );
};
