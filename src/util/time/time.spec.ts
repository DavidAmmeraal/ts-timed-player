const mockFormat = jest.fn().mockReturnThis();
const mockUtc = jest.fn().mockReturnThis();
const mockMoment = jest.fn(() => ({
    format: mockFormat,
    utc: mockUtc,
}));

jest.mock('moment', () => ({
    __esModule: true,
    namedExport: jest.fn(),
    default: mockMoment,
}));

import { formatDateFromNumber, formatDate } from './time';

describe('formatNumber', () => {    
    it('should call format input with moment', () => {
        const n = 123456;
        const formatStr = '+0,0';
        formatDateFromNumber(n, formatStr);
        expect(mockUtc).toHaveBeenCalled();
        expect(mockMoment).toHaveBeenLastCalledWith(n);
        expect(mockFormat).toHaveBeenCalledWith(formatStr);
    })
})

describe('formatDate', () => {
    it('should call format input with moment', () => {
        const n = new Date(123456);
        const formatStr = '+0,0';
        formatDate(n, formatStr);
        expect(mockUtc).toHaveBeenCalled();
        expect(mockMoment).toHaveBeenLastCalledWith(n);
        expect(mockFormat).toHaveBeenCalledWith(formatStr);
    })
})