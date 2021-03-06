/**
 * epics.spec.ts
 * Unit tests for timer epics.
 */
import Types from 'Types';
import { TestScheduler } from 'rxjs/testing';
import { ActionsObservable, StateObservable } from 'redux-observable';
import { Subject } from 'rxjs';
import * as actions from './actions';
import { toggleFlow } from './epics';
import * as services from '../../services';

import { reducer } from '../../store/reducer';

const createTestScheduler = () => new TestScheduler((actual, expected: () => any) => {
  expect(actual).toEqual(expected);
});

const createInitialState = () => reducer(undefined, <any>{});

describe('timer flow', () => {
  it('toggleTimerFlow', () => {
    const testScheduler = createTestScheduler();
    testScheduler.run(({ hot, cold, expectObservable }) => {
      // These are the values emmited by the ticker. Ticks indicate a progress of time by x.
      const timerValues = {
        a: 0.4,
        b: 1.22,
        c: 1.11,
        d: 0.9,
      };

      // This emits the times.
      const timerStream$ = cold('abcd', timerValues);

      // This is going to emit TOGGLE actions at the "a"'s
      const action$ = ActionsObservable.from(
        hot('-a--a---a-a|', {
          a: actions.toggle(),
        }),
        testScheduler,
      );

      const state$ = new StateObservable<Types.RootState>(new Subject(), createInitialState());

      const dependencies = {
        ...services,
        timer: () => timerStream$,
      };

      // Toggles the flows
      const output$ = toggleFlow(action$, state$, dependencies);
      expectObservable(output$).toBe('-abcd---abc|', {
        a: actions.tick(timerValues.a),
        b: actions.tick(timerValues.b),
        c: actions.tick(timerValues.c),
        d: actions.tick(timerValues.d),
      });
    });
  });
});
