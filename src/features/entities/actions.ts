/**
 * actions.ts
 * Action creators for entities actions.
 */
import Types from 'Types';
import { createAction } from 'typesafe-actions';

export const createEntityAction = createAction(
  'entities/CREATE_ENTITY',
  resolve => (entityType: string, props: Types.EntityProps) =>
    resolve({
      entityType,
      props,
    }),
);

export const updateEntityAction = createAction(
  'entities/UPDATE_ENTITY',
  resolve => (entityType: string, props: Types.EntityProps) =>
    resolve({
      entityType,
      props,
    }),
);

export const deleteEntityAction = createAction(
  'entities/DELETE_ENTITY',
  resolve => (entityType: string, id: string) =>
    resolve({
      entityType,
      id,
    }),
);
