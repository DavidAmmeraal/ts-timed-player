/**
 * ConnectedTimeDisplay.tsx
 * Connects TimeDisplay to the redux store.
 */
import Types from 'Types';
import { connect } from 'react-redux';

import { timerSelectors } from '../features/timer';
import { TimeDisplay } from './TimeDisplay';

const mapStateToProps = (state: Types.RootState) => ({
  time: timerSelectors.getTimeMilli(state.timer),
});

export const ConnectedTimeDisplay = connect(mapStateToProps)(TimeDisplay);
