import * as actions from './actions';

describe('createTrackAction()', () => {
    it('should create a new CREATE action.', () => {
        const track = {
            id: '123',
            start: new Date(1),
            end: new Date(3)
        }
        const action = actions.createTrackAction(track);
        expect(action).toMatchSnapshot();
    })
});

describe('updateTrackAction()', () => {
    it('should create a new UPDATE action.', () => {
        const action = actions.updateTrackAction('123', { start: new Date(2)});
        expect(action).toMatchSnapshot();
    })
});

describe('deleteTrackAction()', () => {
    it('should create a new DELETE action.', () => {
        const action = actions.deleteTrackAction('123');
        expect(action).toMatchSnapshot();
    })
});