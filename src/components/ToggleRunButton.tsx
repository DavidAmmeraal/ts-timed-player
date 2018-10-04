import * as React from 'react';

interface IToggleRunButtonProps {
  onClick: () => any;
  running: boolean;
}

const ToggleRunButton: React.SFC<IToggleRunButtonProps> = ({ onClick, running }) => (
  <button onClick={onClick}>{running ? 'Stop' : 'Start'}</button>
);

export default ToggleRunButton;
