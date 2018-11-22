/**
 * fetch.ts
 * fetching utils.
 */

import { httpErrorHandler } from './httpErrorHandler';

export const fetchWithHttpErrorHandler = (uri: string, params?: {}) =>
  fetch(uri, params).then(httpErrorHandler);
