/**
 * @jest-environment jsdom
 */

import params from './params';

describe('params', () => {
  beforeEach(() => {
    window.history.pushState({}, 'Test Title', '/test.html');
  });
  it('should parse params from query string', () => {
    const stageName = 'some.stage';
    window.history.pushState({}, 'Test Title', `/test.html?stage=${stageName}`);

    const parsedParams = params();
    expect(parsedParams).toEqual({
      stage: stageName,
    });
  });

  it('should take process.env.DEFAULT_STAGE if no stage is specified in query string', () => {
    process.env.DEFAULT_STAGE = 'default.stage';
    const parsedParams = params();
    expect(parsedParams).toEqual({
      stage: process.env.DEFAULT_STAGE,
    });
  });
});
