import React from 'react';
import { formatToTimerTime } from 'util/time';

interface ITimeDisplayProps {
  time: number;
}

const TimeDisplay: React.SFC<ITimeDisplayProps> = ({ time }) => <>{formatToTimerTime(time)}</>;

export default TimeDisplay;
