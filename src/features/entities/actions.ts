/**
 * actions.ts
 * Action creators for entities actions.
 */
import Types from 'Types';
import { createAction } from 'typesafe-actions';
import * as constants from './constants';

export const createGenericEntityAction = createAction(
  constants.CREATE_ENTITY,
  resolve => (entity:Types.Entity) => resolve(entity),
);

export const createEntityAction = <E extends Types.Entity = Types.Entity>(entity:E) => createGenericEntityAction(entity);

export const updateGenericEntityAction = createAction(
  constants.UPDATE_ENTITY,
  resolve => (update:Types.EntityUpdate) => resolve(update),
)

export const updateEntityAction = <E extends Types.Entity = Types.Entity>(update:Types.EntityUpdate<E>) => updateGenericEntityAction(update);

export const deleteEntityAction = createAction(
  constants.DELETE_ENTITY,
  resolve => (type: string, id: string) =>
    resolve({
      type,
      id,
    }),
);
