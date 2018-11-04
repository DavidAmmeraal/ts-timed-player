import { HTTPError } from './fetch';

describe('fetch utils', () => {
  describe('FetchError class', () => {
    it('should have name of \'FetchError\'', () => {
      const response = { status: 404, statusText: 'not found', url: 'http://some.url.somewhere'}
      const err = new HTTPError(response);
      expect(err.name).toBe('HTTPError');
    })
  })
})