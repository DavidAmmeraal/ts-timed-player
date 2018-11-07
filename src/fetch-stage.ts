import getParams from './params';
import { fetchWithHttpErrorHandler } from './util/fetch';

export const fetchStage = () =>
  new Promise((resolve, reject) => {
    const stage = getParams().stage;
    if (!stage) {
      reject(new Error('No stage specified'));
    } else {
      fetchWithHttpErrorHandler(stage)
        .then(response => response.json())
        .then(result => resolve({ ...result }));
    }
  });
