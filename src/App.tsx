/**
 * App.tsx
 */
import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import { StagePlayer } from './components/StagePlayer';
import { fetchStage } from './fetchStage';

const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
  }`;

export const App: React.SFC = () => (
  <StagePlayer stage={fetchStage}>
    <GlobalStyle />
    <span>A stageplayer child!</span>
  </StagePlayer>
);