/**
 * HttpError.spec.ts
 */

import { HttpError } from './HttpError';

describe('HttpError class', () => {
  describe('when constructed with a response', () => {
    let input: Response;
    let output: HttpError;
    beforeEach(() => {
      const myBlob = new Blob();
      const init = { status: 404, statusText: 'not found!' };
      input = new Response(myBlob, init);
      output = new HttpError(input);
    });

    it('should have name of "HttpError".', () => {
      expect(output.name).toBe('HttpError');
    });

    it('should have a property with the response', () => {
      expect(output.response).toBe(input);
    });

    it('should have a property with the status code', () => {
      expect(output.code).toBe(404);
    });

    it('should have a formatted message', () => {
      expect(output.message).toBe(`404 - ${input.url}: not found!`);
    });
  });
});