import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ADD, INCREMENT } from './constants';

export type CountersAction = ActionType<typeof actions>;
export type CountersState = {
  readonly value: number;
};

export const initialState: CountersState = {
  value: 1,
};

export default (state: CountersState = initialState, action: CountersAction) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        value: state.value + action.payload,
      };
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };
    default:
      return state;
  }
};
