const stageUri = 'http://path.to.some/stage.stage';
const stage = { foo: 'bar'};

const mockParams = {
  stage: stageUri,
};
jest.mock('./params', () => () => mockParams);
import fetchMock from 'fetch-mock';
import * as fetchUtils from 'util/fetch';

import { fetchStage } from './fetch-stage';

describe('fetchStage', () => {

  beforeEach(() => {
    fetchMock.reset();
  })

  it('should call fetch () with a uri specified in the given params', () => {
    fetchStage().then((result) => {
      expect(result).toEqual(stage);
    })
  });

  it('should use fetchWithErrors to handle not expected HTTP responses', () => {
    const withErrorsSpy = jest.spyOn(fetchUtils, 'fetchWithErrors');
    fetchStage();
    expect(withErrorsSpy).toBeCalledTimes(1);
    expect(withErrorsSpy).toBeCalledWith(stageUri);
  })

  it('should throw an error if error is encountered', () => {
    const err = new Error('bad fetching error!');
    fetchMock.get(stageUri, Promise.reject(err));
    fetchStage()
      .then(res => res)
      .catch(thrown => {
        expect(thrown).toBe(err);
      }); 
  });
});
