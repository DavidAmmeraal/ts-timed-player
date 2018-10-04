import { connect } from 'react-redux';
import Types from 'Types';
import { countersSelectors } from '../features/counters';

import CountersValue from './CountersValue';

const mapStateToProps = (state: Types.RootState) => ({
  value: countersSelectors.getCounter(state.counters),
});

export default connect(mapStateToProps)(CountersValue);
