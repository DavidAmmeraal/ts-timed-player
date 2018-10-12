import React from 'react';
import { FormattedTime } from 'util/time';

interface ITimeDisplayProps {
  time: number;
  format?: string;
}

const TimeDisplay: React.SFC<ITimeDisplayProps> = ({ time, format = 'HH:mm:ss.SSS' }) => {
  return <FormattedTime time={time} format={format} />;
};

export default TimeDisplay;
