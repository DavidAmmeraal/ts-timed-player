/**
 * models.ts
 * Contains track models.
 */
import Types from 'Types';
import { createEntityCreator } from '../../entities/index';
import { TRACK_ENTITY_NAME } from './constants';

export interface ITrack extends Types.EntityProps {
  start: Date;
  end: Date;
}

export const createTrack = createEntityCreator(TRACK_ENTITY_NAME, (props:ITrack) => ({
  ...props,
}));

export type TrackEntity = Types.EntityType<typeof createTrack>;
