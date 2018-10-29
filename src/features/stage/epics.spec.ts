
import Types from 'Types';
import { TestScheduler } from 'rxjs/testing';
import { ActionsObservable, StateObservable } from 'redux-observable';
import * as actions from './actions';
import { fetchStageFlow } from './epics';
import services from '../../services';

import reducer from '../../store/reducer';
import { Subject } from 'rxjs';

/**
 * FIXTURES
 */
const initialState = reducer(undefined, {} as any);
const testScheduler = new TestScheduler((actual, expected: () => any) => {
    expect(actual).toEqual(expected);
});


describe('fetchStageFlow', () => {
    it('should fetch stage from uri, and dispatch a FETCH_STAGE_SUCCESS on success', () => {
        testScheduler.run(({ hot, cold, expectObservable }) => {
            const state$ = new StateObservable<Types.RootState>(new Subject(), initialState);
            const stageResult = { foo: 'bar' };

            const dependencies = {
                ...services,
                api: {
                    ...services.api,
                    getStage: () => cold('---a', { a: stageResult }),
                }
            };

            const action$ = ActionsObservable.from(hot('-a', {
                a: actions.fetchStage.request('https://some.domain.com'),
            }));

            //Toggles the flows
            const output$ = fetchStageFlow(action$, state$, dependencies);
            
            expectObservable(output$).toBe('----a', {
                a: actions.fetchStage.success(stageResult),
            });
            
        });
    });
});
