import fetchMock from 'fetch-mock';
import { HttpError, httpErrorHandler, fetchWithHttpErrorHandler } from './fetch';

const url = 'http://some.url.com';
const notFoundURL = 'http://some.other.url.com';

describe('fetch utils', () => {
  beforeEach(() => {
    fetchMock.reset();
    fetchMock.mock(url, 200);
    fetchMock.mock(notFoundURL, 404);
  });
  describe('HttpError class', () => {
    describe('when constructed with a response', () => {
      const response = { status: 404, statusText: 'not found', url };
      const err = new HttpError(response);

      it('should have name of \'HttpError\'', () => {
        expect(err.name).toBe('HttpError');
      });

      it('should have a property with the response', () => {
        expect(err.response).toBe(response);
      });

      it('should have a property with the status code', () => {
        expect(err.code).toBe(404);
      });

      it('should have a formatted message', () => {
        expect(err.message).toBe('404 - http://some.url.com: not found');
      });
    });
  });

  describe('httpErrorHandler', () => {
    describe('when called with a 2xxx response', () => {
      let received: Response;
      const fetching = fetch(url)
        .then(r => (received = r))
        .then(httpErrorHandler);

      it('should return a promise that resolves with the response', () => {
        expect.assertions(1);
        return fetching.then(r => expect(r).toBe(received));
      });
    });

    describe('when called with a non-2xxx response (404 etc)', () => {
      let received: Response;

      const fetching = fetch(notFoundURL)
        .then(r => (received = r))
        .then(httpErrorHandler);

      it('should reject with a HTTPError constructed with the response', () => {
        expect.assertions(1);
        return fetching.catch((err: HttpError) => expect(err.response).toBe(received));
      });
    });
  });

  describe('fetchWithHttpErrorHandler', () => {
    const params = {};
    fetchWithHttpErrorHandler(notFoundURL, params);
    it('should call fetch with uri and params', () => {
      expect(fetchMock.called(notFoundURL)).toBe(true);
      expect(fetchMock.lastOptions).toBe(params);
    });
  });
});
