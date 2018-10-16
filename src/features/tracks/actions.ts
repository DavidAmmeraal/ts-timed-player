import { action } from 'typesafe-actions';

import { CREATE_TRACK, UPDATE_TRACK, DELETE_TRACK } from './constants';
import { ITrack } from './models';

export const createTrack = (track:ITrackEntity) => action(CREATE_TRACK, track);
export const updateTrack = (id:string, track: Partial<ITrack>) => action(UPDATE_TRACK, {
    id,
    track,
});
export const deleteTrack = (id:string) => action(DELETE_TRACK, id);
