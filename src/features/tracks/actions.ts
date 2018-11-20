/**
 * actions.ts
 * Action creators for tracks actions.
 */
import Types from 'Types';
import { entitiesActions } from '../entities';
import { Track } from './entities';

export const createTrackAction = ({id, entityType, props}: Track) =>
    entitiesActions.createEntityAction(entityType, id, props);
export const updateTrackAction = ({ id, entityType, props }: Types.EntityUpdate<Track>) =>
    entitiesActions.updateEntityAction(id, entityType, props);

export const deleteTrackAction = ({ id, entityType }: Track) => entitiesActions.deleteEntityAction(entityType, id);
