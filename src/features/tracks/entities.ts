/**
 * entities.ts
 * Contains track models.
 */
import Types from 'Types';

export interface TrackProps extends Types.EntityProps {
  start: Date;
  end: Date;
}

export interface Track extends Types.Entity<'Track', TrackProps>{}

export const createTrack = (id:string, props:TrackProps):Track => ({
  entityType: 'Track',
  id,
  props,
});