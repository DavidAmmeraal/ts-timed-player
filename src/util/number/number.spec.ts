const mockFormat = jest.fn();
const mockNumeral = jest.fn(() => ({
    format: mockFormat,
}));

jest.mock('numeral', () => ({
    __esModule: true,
    namedExport: jest.fn(),
    default: mockNumeral,
}));

import { formatNumber } from './number';

describe('format', () => {
    it('should call format input with numeral', () => {
        const n = 123456;
        const formatStr = '+0,0';
        formatNumber(n, formatStr);
        expect(mockNumeral).toHaveBeenLastCalledWith(n);
        expect(mockFormat).toHaveBeenCalledWith(formatStr);
    })
})