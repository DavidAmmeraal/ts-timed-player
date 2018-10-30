import Types from 'Types';
import { Epic, combineEpics } from 'redux-observable';
import { isOfType } from 'typesafe-actions';
import { fetchStage } from './actions'; 

import { filter, switchMap, map, catchError } from 'rxjs/operators';

import { FETCH_STAGE_REQUEST } from './constants';
import { of, pipe } from 'rxjs';

export const fetchStageFlow: Epic<
    Types.RootAction,
    Types.RootAction,
    Types.RootState,
    Types.Services
    > = (action$, store$, { api }) => {
        return action$.pipe(
            filter(isOfType(FETCH_STAGE_REQUEST)),
            switchMap(a => api.getStage(a.payload).pipe(
                map(fetchStage.success),
                catchError(pipe(of, map(fetchStage.failure)))
            ))            
        )
    };
export default combineEpics(fetchStageFlow);
