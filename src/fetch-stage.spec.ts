import fetchMock from 'fetch-mock';
import * as fetchUtils from './util/fetch';

import { fetchStage } from './fetch-stage';

const stageUri = 'http://path.to.some/stage.stage';
const stage = { foo: 'bar' };

const mockParams = {
  stage: stageUri,
};
jest.mock('./params', () => () => mockParams);

describe('fetchStage', () => {
  beforeEach(() => {
    fetchMock.reset();
    fetchMock.mock(stageUri, stage);
  });

  it('should call fetch () with a uri specified in the given params', () => {
    fetchStage().then((result:{}) => {
      expect(result).toEqual({ foo: 'bar' });
    });
  });

  it('should use fetchWithErrors to handle not expected HTTP responses', () => {
    const withErrorsSpy = jest.spyOn(fetchUtils, 'fetchWithHttpErrorHandler');
    fetchStage();
    expect(withErrorsSpy).toBeCalledTimes(1);
    expect(withErrorsSpy).toBeCalledWith(stageUri);
  });

  it('should throw an error if error is encountered', () => {
    const err = new Error('bad fetching error!');
    fetchMock.reset();
    fetchMock.get(stageUri, Promise.reject(err));
    fetchStage()
      .then(res => res)
      .catch((thrown) => {
        expect(thrown).toBe(err);
      });
  });
});
