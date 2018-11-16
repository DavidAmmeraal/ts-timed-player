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
import { CREATE, UPDATE, DELETE } from './constants';

export type EntitiesAction = ActionType<typeof actions>;

type CreateAction = ActionType<typeof actions.createGenericEntityAction>;
type UpdateAction = ActionType<typeof actions.updateGenericEntityAction>;
type DeleteAction = ActionType<typeof actions.deleteEntityAction>;

export type EntitiesState = {
  [key:string]: EntitiesContainer,
}

export type EntitiesContainer = {
  ids: string[],
  byId: {
    [key: string]: Types.EntityProps
  }
} 

export const defaultState: EntitiesState = {};
const createEntitiesContainer = (): EntitiesContainer => ({
  ids: new Array<string>(),
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
const handleCreate = (state: EntitiesState, { payload: { type, props } }: CreateAction) => pipe<EntitiesState, EntitiesState, EntitiesState, EntitiesState>(
  unless(has(type), set(lensProp(type), createEntitiesContainer())),
  set(lensPath([type, 'byId', props.id]), type),
  over(lensPath([type, 'ids']), union([props.id])),
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
  { payload: { type, id, props } }: UpdateAction,
) => pipe<EntitiesState, EntitiesState>(
  when(
    view(lensPath([type, 'byId', id])),
    over(lensPath([type, 'byId', id]), existing => ({ ...existing, ...props })),
  ),
)(state);

/**
 * Handles entities/DELETE actions. Deletes an entity with id.
 *
 * @param state Base state.
 * @param action Entities/DELETE action to be handled.
 */
const handleDelete = (state: EntitiesState, { payload: { type, id } }: DeleteAction) => pipe<EntitiesState, EntitiesState, EntitiesState>(
  over(lensPath([type, 'byId']), dissoc(id)),
  over(lensPath([type, 'ids']), without([id])),
)(state);

/**
 * Handles and reduces actions into state.
 *
 * @param state The current state.
 * @param action The action to be handled.
 */
export const reducer = (state: EntitiesState = defaultState, action: Types.RootAction) => {
  switch (action.type) {
    case CREATE:
      return handleCreate(state, action);
    case UPDATE:
      return handleUpdate(state, action);
    case DELETE:
      return handleDelete(state, action);
    default:
      return state;
  }
};
