import * as React from 'react';

interface IPlayButtonProps {
  onClick: () => any;
  running: boolean;
}

const PlayButton: React.SFC<IPlayButtonProps> = ({ onClick, running }) => (
  <button onClick={onClick}>{running ? 'Stop' : 'Start'}</button>
);

export default PlayButton;
