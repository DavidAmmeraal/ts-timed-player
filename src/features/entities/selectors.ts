import Types, { EntityProps } from 'Types';
/**
 * selectors.ts
 * Contains the selectors to get data from the entities state.
 */
import { createSelector } from 'reselect';

/**
 * Selects the entities container for a given entity type.
 *
 * @param entityType The name of the entity container.
 */
export const createEntitiesContainerSelector = (entityType: string) =>
    createSelector((state: Types.RootState) => state.entities[entityType], typeEntities => typeEntities);

/**
 * Selects all the entities of a given entity type as an array, ordered by the array of ids in the EntityContainer.
 *
 * @param entityType The name of the entity container.
 */
export const createAllEntitiesSelector = (entityType: string) =>
    createSelector(
        createEntitiesContainerSelector(entityType),
        entitiesContainer => entitiesContainer ? entitiesContainer.ids.map(id => entitiesContainer.byId[id]) : []
    );

/**
 * Creates a memoized selector an entity by Id. If either the return value of the id selector,
 * or the entity associated with the returned id changes, a new value will be recomputed.
 * @param entityType The name of the entity type.
 * @param idSelector Returns the id of the entity to be retrieved.
 */
export const createEntitySelector =
    <P = any, O extends EntityProps = EntityProps>
    (entityType: string, idSelector: (state:Types.RootState, props:P) => string) => {
        return createSelector((s: Types.RootState, p: P) => {
            const id = idSelector(s, p);
            return s.entities[entityType].byId[id];
        }, (entity) => <O>entity);
    };
