import * as React from 'react';

interface IIncrementButtonProps {
  onClick: () => any;
}

const IncrementButton: React.SFC<IIncrementButtonProps> = ({ onClick }) => (
  <button onClick={onClick}>Increment</button>
);

export default IncrementButton;
