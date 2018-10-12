import Types from 'Types';
import { connect } from 'react-redux';

import { timerSelectors } from '../features/timer';
import TimeDisplay from './TimeDisplay';

const mapStateToProps = (state: Types.RootState) => ({
  time: timerSelectors.getTimeMs(state.timer),
});

export default connect(mapStateToProps)(TimeDisplay);
