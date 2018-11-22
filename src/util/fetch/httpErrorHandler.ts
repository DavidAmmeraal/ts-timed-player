/**
 * httpErrorHandler.ts
 */

import { HttpError } from './HttpError';

export const httpErrorHandler = (r: Response): Promise<Response> => {
  if (r.status >= 200 && r.status < 300) {
    return Promise.resolve(r);
  }
  return Promise.reject(new HttpError(r));
};
