const msInHour = 3.6e+6;
const msInMinute = 60000;
const msInS = 1000;

export const formatToTimerTime = (n: number, { msDecimals = 3 }:{ msDecimals?: number } = {}) => {
  const h = Math.floor(n / msInHour);
  const m = Math.floor((n - (h * msInHour)) / msInMinute);
  const s = Math.floor((n - ((h * msInHour)) * msInMinute) / msInS);
  const ms = n % 1000;

  const hStr = `${h}`.padStart(2, '0');
  const mStr = `${m}`.padStart(2, '0');
  const sStr = `${s}`.padStart(2, '0');
  const msStr = `${ms}`;
  const str = `${hStr}:${mStr}:${sStr}.${msStr}`;
  return str;
};