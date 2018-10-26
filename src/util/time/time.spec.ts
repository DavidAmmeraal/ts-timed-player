import { formatToTimerTime } from './time';
import each from 'jest-each';

import { getOffset } from './time';

describe('getOffset()', () => {
    it('should return the default system timezone offset from UTC in milliseconds', () => {
        expect(getOffset()).toBe(new Date().getTimezoneOffset() * 60000);
    });
})

describe('formatToTimerTimer()', () => {
    each([
        [999, '00:00:00.999'],
        [1000, '00:00:01.000'],
        [59999.99, '00:00:59.999'],
        [60000, '00:01:00.000'],
        [3599999, '00:59:59.999'],
        [3600000, '01:00:00.000'],
        [359999999, '99:59:59.999'],
        [360000000, '00:00:00.000'],
    ]).test(
        'formats the number %d to string "%s".',
        (a: number, expected: string) => {
            expect(formatToTimerTime(a)).toBe(expected);
        },
    );
});

