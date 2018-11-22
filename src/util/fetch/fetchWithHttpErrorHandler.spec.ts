/**
 * fetch.spec.ts
 * unit tests for fetch utils.
 */

// tslint:disable-next-line:mocha-no-side-effect-code
const mockHandler = jest.fn(r => r);
jest.mock('./httpErrorHandler', () => ({
  httpErrorHandler: mockHandler,
}));

// tslint:disable-next-line:import-name
import fetch from 'jest-fetch-mock';
import { fetchWithHttpErrorHandler } from './fetchWithHttpErrorHandler';

// tslint:disable-next-line:mocha-no-side-effect-code

describe('fetchWithHttpErrorHandler', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('should call fetch with uri and params', () => {
    const myBlob = new Blob();
    const init = { status: 200, statusText: 'success!' };
    const response = new Response(myBlob, init);

    // tslint:disable-next-line:no-http-string
    const url = 'http://google.com';
    const params = {};

    const mockFetch = jest.fn(() => Promise.resolve(response));
    fetch.mockImplementation(mockFetch);

    return fetchWithHttpErrorHandler(url, params).then((r) => {
      expect(mockFetch).toBeCalledWith(url, params);
      expect(mockHandler).toBeCalledWith(r);
    });
  });
});
