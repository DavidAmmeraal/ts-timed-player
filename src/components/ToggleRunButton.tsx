/**
 * ToggleRunButton.tsx
 */
import Types from 'Types';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { timerSelectors, TimerAction } from '../features/timer';
import { toggle } from '../features/timer/actions';
import { PlayButton } from './PlayButton';

const mapDispatchToProps = (dispatch: Dispatch<TimerAction>) => ({
  onClick: () => dispatch(toggle()),
});

const mapStateToProps = (state: Types.RootState) => ({
  running: timerSelectors.getRunning(state.timer),
});

export const ToggleRunButton = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayButton);
