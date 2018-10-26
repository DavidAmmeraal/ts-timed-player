/* jest.mock('date-fns', () => ({
    __esModule: true,
    namedExport: jest.fn(),
    default: mockMoment,
}));
 */
const mockFormat = jest.fn();
jest.mock('date-fns/fp', () => ({
    format: mockFormat,
}))
import { getOffset } from './time';

describe('getOffset()', () => {
    it('should return the default system timezone offset from UTC in milliseconds', () => {
        expect(getOffset()).toBe(new Date().getTimezoneOffset() * 60000);
    });
})