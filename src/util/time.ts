export interface IformatToSecondsArgs {
    time: number;
    secondsPadChar?: string;
    millisecondsPadChar?: string;
    padSecondsTo?: number,
    padMillisecondsTo?: number,
    negativeChar?: string,
    positiveChar?: string
}

const getSeconds = (time: number) => time > 0 ? Math.floor(time / 1000) : Math.ceil(time / 1000);
const getMilliseconds = (time: number) => Math.abs(time % 1000);
const getTimeParts = (time: number) => ({ seconds: getSeconds(time), milliseconds: getMilliseconds(time) });

export const formatToSeconds = ({ 
    time, 
    secondsPadChar = '0', 
    millisecondsPadChar = '0', 
    padSecondsTo = 0, 
    padMillisecondsTo = 0 ,
    negativeChar = '-',
    positiveChar = '',
}: IformatToSecondsArgs) => {
    const timeParts = getTimeParts(time);

    const formattedSeconds = `${timeParts.seconds}`.padStart(padSecondsTo, secondsPadChar);
    const formattedMilliseconds = `${timeParts.milliseconds}`.padEnd(padMillisecondsTo, millisecondsPadChar);
    const sign = time < 0 ? negativeChar : positiveChar;
    return `${sign}${formattedSeconds}.${formattedMilliseconds}`;
};