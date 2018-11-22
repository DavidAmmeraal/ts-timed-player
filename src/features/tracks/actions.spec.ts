/**
 * actions.spec.ts
 * unit tests for tracks actions creators.
 */
import * as actions from './actions';
import { createTrack, createTrackUpdate } from './entities';
describe('createTrackAction()', () => {
  it('should create a new CREATE action.', () => {
    const props = {
      id: '123',
      start: new Date(1),
      end: new Date(3),
    };
    const track = createTrack(props);
    const action = actions.createTrackAction(track);
    expect(action).toMatchSnapshot();
  });
});

describe('updateTrackAction()', () => {
  it('should create a new UPDATE action.', () => {
    const update = createTrackUpdate('123', { start: new Date(2)} );
    const action = actions.updateTrackAction(update);
    expect(action).toMatchSnapshot();
  });
});

describe('deleteTrackAction()', () => {
  it('should create a new DELETE action.', () => {
    const action = actions.deleteTrackAction('123');
    expect(action).toMatchSnapshot();
  });
});
