/**
 * StagePlayerError.tsx
 * Displays an error.
 */
import * as React from 'react';
interface StagePlayerErrorProps {
  error: Error;
}

export const StagePlayerError: React.SFC<StagePlayerErrorProps> = ({ error }) => (
  <span>Error = {error.message}</span>
);
