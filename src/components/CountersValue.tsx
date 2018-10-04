import * as React from 'react';

interface ICountersValueProps {
  value: number;
}

const CountersValue: React.SFC<ICountersValueProps> = ({ value }) => <span>{value}</span>;

export default CountersValue;
