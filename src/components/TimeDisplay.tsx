import React from 'react';
import { formatToTimerTime } from 'util/number/fp';
import { pipe, add } from 'ramda';

interface ITimeDisplayProps {
  time: number;
  offset?: number;
}

const TimeDisplay: React.SFC<ITimeDisplayProps> = ({
  time,
  offset = 0,
}) =>
  pipe(
    add(offset),
    t => t / 10,
    formatNumber(formatStr),
    str => <>{str}</>,
  )(time);

export default TimeDisplay;
