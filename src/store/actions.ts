import { createAsyncAction } from 'typesafe-actions';

import { FETCH_STAGE_REQUEST, FETCH_STAGE_SUCCESS, FETCH_STAGE_ERROR } from './constants';

export const fetchStage = createAsyncAction(
  FETCH_STAGE_REQUEST,
  FETCH_STAGE_SUCCESS,
  FETCH_STAGE_ERROR,
)<void, {}, Error>();
