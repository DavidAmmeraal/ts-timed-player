/**
 * reducer.ts
 * Handles the entities actions.
 */
import Types from 'Types';
import { ActionType } from 'typesafe-actions';
import {
  pipe,
  unless,
  has,
  lensProp,
  set,
  lensPath,
  over,
  union,
  when,
  view,
  dissoc,
  without,
} from 'ramda';
import * as actions from './actions';

export type EntitiesAction = ActionType<typeof actions>;

type CreateAction = ActionType<typeof actions.createEntityAction>;
type UpdateAction = ActionType<typeof actions.updateEntityAction>;
type DeleteAction = ActionType<typeof actions.deleteEntityAction>;

export type EntitiesState = {
  [key:string]: EntitiesContainer;
};

export type EntitiesContainer = {
  ids: string[];
  byId: {
    [key: string]: Types.EntityProps;
  };
};

export const defaultState: EntitiesState = {};
const createEntitiesContainer = (): EntitiesContainer => ({
  ids: [],
  byId: {},
});

/**
 * Handles entities/CREATE actions. Creates EntitiesContainer for entity type if it doesn't yet,
 * and then adds the new entity and its id to the list of ids.
 *
 * @param state Base state.
 * @param action entities/CREATE action to be handled.
 * @returns new state.
 */
const handleCreate = (
  state: EntitiesState,
  { payload: { entityType, props } }: CreateAction
) => pipe<EntitiesState, EntitiesState, EntitiesState, EntitiesState>(
  unless(has(entityType), set(lensProp(entityType), createEntitiesContainer())),
  set(lensPath([entityType, 'byId', props.id]), props),
  over(lensPath([entityType, 'ids']), union([props.id])),
)(state);

/**
 * Handles entities/UPDATE actions. Updates (shallow merge) an entity with given id.
 * Returns input state if entity does not exist.
 *
 * @param state Base state.
 * @param action entities/UPDATE action to be handled.
 * @returns new state.
 */
const handleUpdate = (
  state: EntitiesState,
  { payload: { entityType, props } }: UpdateAction,
) => pipe<EntitiesState, EntitiesState>(
  when(
    view(lensPath([entityType, 'byId', props.id])),
    over(lensPath([entityType, 'byId', props.id]), existing => ({ ...existing, ...props })),
  ),
)(state);

/**
 * Handles entities/DELETE actions. Deletes an entity with id.
 *
 * @param state Base state.
 * @param action Entities/DELETE action to be handled.
 */
const handleDelete = (
  state: EntitiesState, { payload: { entityType, id } }: DeleteAction
) => pipe<EntitiesState, EntitiesState, EntitiesState>(
  over(lensPath([entityType, 'byId']), dissoc(id)),
  over(lensPath([entityType, 'ids']), without([id]))
)(state);

/**
 * Handles and reduces actions into state.
 *
 * @param state The current state.
 * @param action The action to be handled.
 */
export const reducer = (state: EntitiesState = defaultState, action: Types.RootAction) => {
  switch (action.type) {
    case 'entities/CREATE_ENTITY':
      return handleCreate(state, action);
    case 'entities/UPDATE_ENTITY':
      return handleUpdate(state, action);
    case 'entities/DELETE_ENTITY':
      return handleDelete(state, action);
    default:
      return state;
  }
};
