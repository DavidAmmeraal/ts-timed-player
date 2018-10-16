import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { EntitiesContainer } from './models';
import { CREATE, UPDATE, DELETE } from './constants';
import { Map } from 'immutable';

export type EntitiesAction = ActionType<typeof actions>;

export type EntitiesState = Map<string, EntitiesContainer>;
export const defaultState: EntitiesState = Map<string, EntitiesContainer>();

export default (state: EntitiesState = defaultState, action: EntitiesAction) => {
    switch (action.type) {
        case CREATE:
            return state
                .setIn([action.payload.entityType, 'ids'], action.payload.entity.id)
                .setIn([action.payload.entityType, 'byId', action.payload.entity.id], action.payload.entity);
        case UPDATE:
            return state
                .mergeIn([action.payload.entityType, 'byId', action.payload.id], action.payload.props)
        case DELETE:
            return state
                .deleteIn
        default:
            return state;
    }
};
