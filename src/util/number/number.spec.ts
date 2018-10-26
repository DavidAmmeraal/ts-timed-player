import { formatToTimerTime } from './number';
import each from 'jest-each';


each([
    [1234, undefined, '00:00:01.234'],
    [12345, undefined, '00:00:12.345']
]).test(
    'returns the result of adding %d to %d',
    (a:number, params:{}, expected:string) => {
        expect(formatToTimerTime(a, params)).toBe(expected);
    },
);