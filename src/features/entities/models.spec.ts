/**
 * models.spec.ts
 * Contains the unit tests for the entities container creator.
 */
import { createEntitiesContainer } from './models';

describe('createEntitiesContainer()', () => {
  it('should create a new empty entities container.', () => {
    const container = createEntitiesContainer();
    expect(container).toMatchSnapshot();
  });
});
