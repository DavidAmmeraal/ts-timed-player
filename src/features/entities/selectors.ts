import { createSelector } from 'reselect';
import { EntitiesState } from './reducer';

export const createEntitiesSelector = (entityType:string) => createSelector(
    (state:EntitiesState) => state[entityType],
    typeEntities => typeEntities,
);