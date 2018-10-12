import numeral from 'numeral';

export const formatNumber = (n: number, format: string) => {
  return numeral(n).format(format);
};
