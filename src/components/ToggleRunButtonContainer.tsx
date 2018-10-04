import Types from 'Types';

import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { TimerAction } from '../features/timer';

import { timerSelectors } from '../features/timer';
import { toggle } from '../features/timer/actions';
import ToggleRunButton from './ToggleRunButton';

const mapDispatchToProps = (dispatch: Dispatch<TimerAction>) => ({
  onClick: () => dispatch(toggle()),
});

const mapStateToProps = (state: Types.RootState) => ({
  running: timerSelectors.getRunning(state.timer),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToggleRunButton);
