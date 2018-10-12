import * as React from 'react';

import ToggleRunButton from './components/ToggleRunButton';
import ConnectedTimeDisplay from './components/ConnectedTimeDisplay';

const App: React.SFC = () => (
  <div>
    <ToggleRunButton />
    <ConnectedTimeDisplay />
  </div>
);

export default App;
