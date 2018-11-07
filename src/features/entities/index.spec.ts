/**
 * index.spec.ts
 */
import * as exported from '.';

describe('entities feature module', () => {
  it('should expose according to snapshot', () => {
    expect(exported).toMatchSnapshot();
  });
});
