/**
 * httpErrorHandler.ts
 */

import { HttpError } from './HttpError';
import { httpErrorHandler } from './httpErrorHandler';

describe('httpErrorHandler', () => {
  describe('when called with a 2xxx response', () => {
    let input: Response;
    let output: Promise<Response>;

    beforeEach(() => {
      const myBlob = new Blob();
      const init = { status: 200, statusText: 'success!' };
      input = new Response(myBlob, init);
      output = httpErrorHandler(input);
    });

    it('should return a promise that resolves with the response', () => {
      expect.assertions(1);
      return output.then(r => expect(r).toBe(input));
    });
  });

  describe('when called with a non-2xxx response (404 etc)', () => {
    let input: Response;
    let output: Promise<Response>;

    beforeEach(() => {
      const myBlob = new Blob();
      const init = { status: 404, statusText: 'not found!' };
      input = new Response(myBlob, init);
      output = httpErrorHandler(input);
    });

    it('should reject with a HTTPError constructed with the response', () => {
      expect.assertions(1);
      return output.catch((err: HttpError) => expect(err.response).toBe(input));
    });
  });
});
