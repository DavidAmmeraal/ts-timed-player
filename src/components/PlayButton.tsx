/**
 * PlayButton.tsx
 * Displays a playbutton.
 */
import * as React from 'react';

interface IPlayButtonProps {
  onClick: () => any;
  running: boolean;
}

export const PlayButton: React.SFC<IPlayButtonProps> = ({ onClick, running }) => (
  <button onClick={onClick}>{running ? 'Stop' : 'Start'}</button>
);
