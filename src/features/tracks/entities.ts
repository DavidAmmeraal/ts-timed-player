/**
 * entities.ts
 * Contains track models.
 */
import Types from 'Types';
import * as constants from './constants';

export interface TrackProps extends Types.EntityProps {
  start: Date;
  end: Date;
}

export const createTrack = (props:TrackProps) => ({
  entityType: constants.TRACK_ENTITY_NAME,
  props,
});

export const createTrackUpdate = (id:string, props:Partial<TrackProps>) => ({
  entityType: constants.TRACK_ENTITY_NAME,
  props: {
    ...props,
    id,
  },
});

export type Track = ReturnType<typeof createTrack>;