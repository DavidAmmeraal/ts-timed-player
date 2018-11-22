/**
 * fetchStage.spec.ts
 */

// tslint:disable-next-line:mocha-no-side-effect-code
const mockFetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve({}) }));
jest.mock('./util/fetch/fetchWithHttpErrorHandler', () => ({
  fetchWithHttpErrorHandler: mockFetch,
}));

// tslint:disable-next-line:no-http-string
const stageUri = 'http://path.to.some/stage.stage';
const mockParams = {
  stage: stageUri,
};
jest.mock('./params', () => () => mockParams);

import { fetchStage } from './fetchStage';

describe('fetchStage', () => {
  it('should call fetch () with a uri specified in the given params', () => {
    return fetchStage().then(() => {
      expect(mockFetch).toBeCalledWith(stageUri);
    });
  });
});
