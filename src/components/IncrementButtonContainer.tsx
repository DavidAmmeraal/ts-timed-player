import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { CountersAction } from '../features/counters';
import IncrementButton from './IncrementButton';

import { increment } from '../features/counters/actions';

const mapDispatchToProps = (dispatch: Dispatch<CountersAction>) => ({
  onClick: () => dispatch(increment()),
});

export default connect(
  null,
  mapDispatchToProps,
)(IncrementButton);
