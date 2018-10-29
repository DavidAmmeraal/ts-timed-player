import Types from 'Types';
import { Epic, combineEpics } from 'redux-observable';
import { isOfType } from 'typesafe-actions';
import { fetchStage } from './actions'; 

import { filter, switchMap, map } from 'rxjs/operators';

import { FETCH_STAGE_REQUEST } from './constants';

export const fetchStageFlow: Epic<
    Types.RootAction,
    Types.RootAction,
    Types.RootState,
    Types.Services
    > = (action$, store$, { api }) => {
        return action$.pipe(
            filter(isOfType(FETCH_STAGE_REQUEST)),
            switchMap(a => api.getStage(a.payload)),
            map(fetchStage.success),
            //catchError(pipe(fetchStage.failure, of))
        );
    };
export default combineEpics(fetchStageFlow);
