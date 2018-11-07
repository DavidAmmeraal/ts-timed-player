/**
 * actions.ts
 * Action creators for entities actions.
 */
import { createAction } from 'typesafe-actions';
import * as constants from './constants';
import { Entity } from './models';

export const createEntityAction = createAction(
  constants.CREATE,
  resolve => (entityType: string, entity: Entity) =>
    resolve({
      entityType,
      entity,
    }),
);

export const updateEntityAction = createAction(
  constants.UPDATE,
  resolve => (entityType: string, id: string, props: {}) =>
    resolve({
      entityType,
      id,
      props,
    }),
);

export const deleteEntityAction = createAction(
  constants.DELETE,
  resolve => (entityType: string, id: string) =>
    resolve({
      entityType,
      id,
    }),
);
