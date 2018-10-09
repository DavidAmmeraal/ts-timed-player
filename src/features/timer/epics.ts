import Types from 'Types';
import { Epic, ofType, combineEpics } from 'redux-observable';
import { switchMap, map, takeUntil, filter } from 'rxjs/operators';

import { tick } from './actions';
import { TOGGLE } from './constants';

const INTERVAL = 10;

export const toggleFlow: Epic<
  Types.RootAction,
  Types.RootAction,
  Types.RootState,
  Types.Services
> = (action$, store$, { timer }) => {
  const timer$ = timer(INTERVAL).pipe(
    takeUntil(
      action$.pipe(
        //Take times until next TOGGLE
        ofType(TOGGLE),
      ),
    ),
  );

  return action$.pipe(
    ofType(TOGGLE), //Take every TOGGLE action
    filter((t, index) => index % 2 === 0), //Take every other action, the other is used to stop the timer (toggle).
    switchMap(() => timer$), //Map to to the timer, keeps running until !state.timer.running
    map(t => tick(t)), //Dispatch a TICK action with the current timer time.
  );
};
export default combineEpics(toggleFlow);
