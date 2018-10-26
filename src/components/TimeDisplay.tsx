import React from 'react';
import { formatToTimerTime } from 'util/time';
import { pipe, add } from 'ramda';

interface ITimeDisplayProps {
  time: number;
  offset?: number;
}

const TimeDisplay: React.SFC<ITimeDisplayProps> = ({ time, offset = 0 }) =>
  pipe(
    add(offset),
    formatToTimerTime,
    str => <>{str}</>,
  )(time);

export default TimeDisplay;
