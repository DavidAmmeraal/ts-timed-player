import getParams from './params';
import { fetchWithHttpErrorHandler } from './util/fetch';

export const fetchStage = () =>
  fetchWithHttpErrorHandler(getParams().stage)
    .then(response => response.json())
    .then(result => ({ ...result }));
