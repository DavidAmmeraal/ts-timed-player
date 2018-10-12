import * as React from 'react';
import { formatDateFromNumber } from '../';

export interface IFormattedTimeProps {
  time: number;
  format: string;
}

const FormattedTime: React.SFC<IFormattedTimeProps> = ({ time, format }) => (
  <>{formatDateFromNumber(time, format)}</>
);

export default FormattedTime;
