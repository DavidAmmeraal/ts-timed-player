/**
 * actions.ts
 * Action creators for tracks actions.
 */
import Types from 'Types';
import { entitiesActions } from '../entities';
import { Track } from './entities';
import { TRACK_ENTITY_NAME } from './constants';

export const createTrackAction = ({ entityType, props }:Track) => entitiesActions.createEntityAction(entityType, props);
export const updateTrackAction = ({ entityType, props }:Types.EntityUpdate<Track>) =>
    entitiesActions.updateEntityAction(entityType, props);
export const deleteTrackAction = (id:string) => entitiesActions.deleteEntityAction(TRACK_ENTITY_NAME, id);