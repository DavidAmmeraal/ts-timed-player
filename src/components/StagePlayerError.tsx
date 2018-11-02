import React from 'react';
interface StagePlayerErrorProps {
  error: Error;
}

const StagePlayerError: React.SFC<StagePlayerErrorProps> = ({ error }) => (
  <span>Error = {error.message}</span>
);

export default StagePlayerError;
