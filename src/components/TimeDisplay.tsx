import React from 'react';
import { formatToSeconds, IformatToSecondsArgs } from 'util/time';

interface ITimeDisplayProps extends IformatToSecondsArgs {};
const TimeDisplay: React.SFC<ITimeDisplayProps> = (props) => {
    const timeStr = formatToSeconds(props);
    return (
        <React.Fragment>
            {timeStr}
        </React.Fragment>
    );
};

export default TimeDisplay;