/**
 * epics.ts
 * Epics for timer feature.
 */
import Types from 'Types';
import { Epic, ofType, combineEpics } from 'redux-observable';
import { switchMap, map, takeUntil, filter } from 'rxjs/operators';

import { tick } from './actions';
import { TOGGLE, TIMER_TICK_INTERVAL } from './constants';

export const toggleFlow: Epic<
  Types.RootAction,
  Types.RootAction,
  Types.RootState,
  Types.Services
> = (action$, store$, { timer }) => {
  const timer$ = timer(TIMER_TICK_INTERVAL).pipe(
    takeUntil(
      action$.pipe(
        // Take times until next TOGGLE
        ofType(TOGGLE),
      ),
    ),
  );

  return action$.pipe(
    ofType(TOGGLE), // Take every TOGGLE action
    filter((t, index) => index % 2 === 0), // Take every other action, the other is used to stop the timer (toggle).
    switchMap(() => timer$), // Map to to the timer, keeps running until !state.timer.running
    map(tick), // Dispatch a TICK action with the current timer time.
  );
};

export const epics = combineEpics(toggleFlow);
