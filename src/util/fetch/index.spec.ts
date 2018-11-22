/**
 * index.spec.ts
 */

import * as fetchUtils from '.';

describe('util/fetch', () => {
  it('should match snapshot', () => {
    expect(fetchUtils).toMatchSnapshot();
  });
});