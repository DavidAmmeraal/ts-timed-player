import { fetchStage } from './actions';

describe('action creators', () => {
    describe('fetchStage async action creator', () => {
        it('should create request, success and error actions.', () => {
            expect(fetchStage.request()).toMatchSnapshot();
            expect(fetchStage.failure(new Error('some error'))).toMatchSnapshot();
            expect(fetchStage.success({foo:'bar'})).toMatchSnapshot();
        })
    });
});