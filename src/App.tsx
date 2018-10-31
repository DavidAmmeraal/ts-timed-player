import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import getParams from './params';
import StagePlayer from './components/StagePlayer';

const App: React.SFC = () => (
  <Provider store={store}>
    <StagePlayer {...getParams()} />
  </Provider>
);

export default App;
