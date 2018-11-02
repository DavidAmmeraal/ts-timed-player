import * as React from 'react';
import StagePlayer from './components/StagePlayer';
import { fetchStage } from './fetch-stage';

const App: React.SFC = () => (
  <StagePlayer stage={fetchStage}>
    <span>A stageplayer child!</span>
  </StagePlayer>
);

export default App;
