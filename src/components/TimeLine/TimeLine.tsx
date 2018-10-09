import React from 'react';

import Track from './Track';

interface ITrack {
    start: Date;
    end: Date;
}

interface ITimeLineProps {
    trackRenderer: (trck:ITrack) => JSX.Element
}

const TimeLine:React.SFC<ITimeLineProps> = ({
    tracks
}) => (
    <div>
        { tracks }
    </div>
);

export default TimeLine;