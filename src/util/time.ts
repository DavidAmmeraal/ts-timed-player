/**
 * time.ts
 * Time utils.
 */
import { curry } from 'ramda';
const msInHour = 3.6e6;
const msInMinute = 60000;
const msInS = 1000;

const offsetBase = new Date();

export const getOffset = (date = offsetBase) => {
  return date.getTimezoneOffset() * 60000;
};

const formatToTimerTimeWithDecimals = curry(
  ({ secondDecimals }: { secondDecimals: number }, n: number) => {
    const h = Math.floor(n / msInHour);
    const m = Math.floor((n - h * msInHour) / msInMinute);
    const s = Math.floor((n - h * msInHour - m * msInMinute) / msInS);

    const parts = [
      `${h}`.padStart(2, '0').slice(-2),
      ':',
      `${m}`.padStart(2, '0'),
      ':',
      `${s}`.padStart(2, '0'),
    ];

    if (secondDecimals > 0) {
      const ms = Math.floor(n % 1000);
      parts.push('.');
      parts.push(`${ms}`.padStart(3, '0').slice(0, secondDecimals));
      if (secondDecimals > 3) {
        const nDecimals = Math.floor(n) !== n ? n.toString().split('.')[1] : 0;
        parts.push(`${nDecimals}`.slice(0, secondDecimals - 3));
      }
    }
    return parts.join('');
  },
);

export const formatToTimerTime = formatToTimerTimeWithDecimals({ secondDecimals: 3 });
