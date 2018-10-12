import moment from 'moment';

export const formatDateFromNumber = (n: number, format: string) => {
  return moment(n)
    .utc()
    .format(format);
};

export const formatDate = (n: Date, format: string) => {
  return moment(n)
    .utc()
    .format(format);
};
