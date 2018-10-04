import { TestScheduler } from 'rxjs/testing';
import timer from './timer';
import { take } from 'rxjs/operators';

const testScheduler = new TestScheduler((actual, expected: () => any) => {
    expect(actual).toEqual(expected);
});

test('should emit accumulated time from start by difference between times give by timeProvider on a "tick".', () => {
    testScheduler.run(({hot, cold, expectObservable}) => {
        //These are fake system times, otherwise generated by performance.now()

        const a = 2, b = 3.44, c = 5, d = 5.12;
        const times:number[] = [a, b, c, d];
        
        //Will provide the current system time.
        const timeProvider = (value: number, index: number) => times[index];
        const timer$ = timer(1, timeProvider, testScheduler).pipe(take(3));

        const x = (b - a),
            y = (c - b),
            z = (d - c);

        expectObservable(timer$).toBe('-xy(z|)', { x, y, z });
    });
});