import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { EntitiesContainer, createEntitiesContainer } from './models';
import { CREATE, UPDATE, DELETE } from './constants';
import { pipe, unless, has, lensProp, set, lensPath, over, union } from 'ramda';

export type EntitiesAction = ActionType<typeof actions>;
type CreateAction = ActionType<typeof actions.createEntityAction>;

export interface EntitiesState {
    [key: string]: EntitiesContainer,
}
export const defaultState: EntitiesState = {};

/**
 * Handles entities/CREATE actions. Creates EntitiesContainer for entity type if it doesn't yet. 
 * 
 * @param state Base state.
 * @param action entities/CREATE action to be handled.
 * @returns new state.
 */
const handleCreate = (state:EntitiesState, { payload: { entityType, entity }}:CreateAction) => pipe
    <EntitiesState, EntitiesState, EntitiesState, EntitiesState>(
    unless(
        has(entityType), 
        set(lensProp(entityType), createEntitiesContainer()),
    ),
    set(lensPath([entityType, 'byId', entity.id]), entity),
    over(lensPath([entityType, 'ids']), union([entity.id])),
)(state);

/**
 * Handles and reduces actions into state. 
 * 
 * @param state The current state.
 * @param action The action to be handled.
 */
const reducer = (state: EntitiesState = defaultState, action: EntitiesAction) => {
    switch (action.type) {
        case CREATE:
            return handleCreate(state, action);
        case UPDATE:
            return state;
        case DELETE:
            return state;
        default:
            return state;
    }
};
export default reducer;
