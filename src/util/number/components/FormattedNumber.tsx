import * as React from 'react';
import { formatNumber } from 'util/number';

export interface IFormattedNumberProps {
  number: number;
  format: string;
}

const FormattedNumber: React.SFC<IFormattedNumberProps> = ({ number, format }) => (
  <>{formatNumber(number, format)}</>
);

export default FormattedNumber;
