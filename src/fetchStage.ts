/**
 * fetch-stage.ts
 */

import params from './params';
import { fetchWithHttpErrorHandler } from './util/fetch/fetchWithHttpErrorHandler';

export const fetchStage = () =>
  new Promise((resolve, reject) => {
    const stage = params().stage;
    if (!stage) {
      reject(new Error('No stage specified'));
    } else {
      fetchWithHttpErrorHandler(stage)
        .then(response => response.json())
        .then(result => resolve({ ...result }));
    }
  });
