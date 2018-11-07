/**
 * TimeDisplay.tsx
 * Displays a time specified in ms into the format of HH:MM:SS.SSS.
 */
import * as React from 'react';
import { formatToTimerTime } from '~/util/time';

interface ITimeDisplayProps {
  time: number;
}

export const TimeDisplay: React.SFC<ITimeDisplayProps> = ({ time }) => <>{formatToTimerTime(time)}</>;