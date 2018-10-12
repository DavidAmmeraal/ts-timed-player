import * as React from 'react';
import { formatDate } from '../';

export interface IFormattedDateProps {
  date: Date;
  format: string;
}

const FormattedDate: React.SFC<IFormattedDateProps> = ({ date, format }) => (
  <>{formatDate(date, format)}</>
);

export default FormattedDate;
