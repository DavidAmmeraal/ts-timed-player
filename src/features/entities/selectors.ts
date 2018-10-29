import { createSelector } from 'reselect';
import { EntitiesState } from './reducer';

/**
 * Selects the entities container for a given entity type.
 * 
 * @param entityType The name of the entity container.
 */
export const createEntitiesContainerSelector = (entityType:string) => createSelector(
    (state:EntitiesState) => state[entityType],
    typeEntities => typeEntities,
);

/**
 * Selects all the entities of a given entity type as an array, ordered by the array of ids in the EntityContainer.
 * 
 * @param entityType The name of the entity container.
 */
export const createAllEntitiesSelector = (entityType:string) => createSelector(
    createEntitiesContainerSelector(entityType),
    (entitiesContainer) => entitiesContainer.ids.map(id => entitiesContainer.byId[id]),
);

/**
 * 
 * @param entityType The name of the entity container.
 * @param id The id of the entity that should be retrieved.
 */
export const createEntitySelector = (entityType:string, id:string) => createSelector(
    (state:EntitiesState) => state[entityType].byId[id],
    entity => entity,
);