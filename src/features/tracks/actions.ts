import { TRACK_ENTITY_NAME } from './constants';
import { entitiesActions } from 'features/entities';
import { ITrack } from './models';

export const createTrackAction = (track:ITrack) => entitiesActions.createEntityAction(TRACK_ENTITY_NAME, track);
export const updateTrackAction = (id:string, props:Partial<ITrack>) => entitiesActions.updateEntityAction(TRACK_ENTITY_NAME, id, props);
export const deleteTrackAction = (id:string) => entitiesActions.deleteEntityAction(TRACK_ENTITY_NAME, id);
