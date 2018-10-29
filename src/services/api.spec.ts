import fetch from 'jest-fetch-mock';
import api from './api';

describe('getStage()', () => {
    beforeEach(() => {
        fetch.resetMocks();
    })
    it('should use fetch api to retrieve stage file', () => {
        const obj = { foo: 'bar' }; 
        const uri = 'https://some.domain.com';
        fetch.mockResponseOnce(JSON.stringify(obj));
        api.getStage(uri).subscribe(result => {
            expect(result).toEqual(obj)
        });

        expect(fetch.mock.calls.length).toEqual(1)
        expect(fetch.mock.calls[0][0]).toEqual('https://some.domain.com');
    });
});