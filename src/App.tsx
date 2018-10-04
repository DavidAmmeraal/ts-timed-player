import * as React from 'react';

import IncrementButtonContainer from './components/IncrementButtonContainer';
import CountersValueContainer from './components/CountersValueContainer';
import ToggleRunButtonContainer from './components/ToggleRunButtonContainer';

const App: React.SFC = () => (
  <div>
    <CountersValueContainer />
    <IncrementButtonContainer />
    <ToggleRunButtonContainer />
  </div>
);

export default App;
