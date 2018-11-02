import getParams from './params';
import { fetchWithErrors } from './util/fetch';

export const fetchStage = () =>
  fetchWithErrors(getParams().stage)
    .then(response => response.json())
    .then(result => ({ ...result }));
