import { formatToSeconds } from './time';

describe('formatToSeconds', () => {
    it('should pad using only required arguments', () => {
        const time = 104235;
        const expected = '104.235';

        expect(formatToSeconds({ time })).toBe(expected);
    })
});