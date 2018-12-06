/**
 * selectors.ts
 */
import Types from 'Types';
import { createAllEntitiesSelector, createEntitySelector } from '../entities/selectors';
import { TRACK_ENTITY_NAME } from './constants';
import { TrackProps } from './entities';

const allTracksSelector = createAllEntitiesSelector(TRACK_ENTITY_NAME);

/**
 * Memoized selector that should return matching Track for id returned by idSelector.
 * @param idSelector Returns the id of the Track that should be retrieved.
 */
const trackSelector = <P>(idSelector:(state: Types.RootState, props:P) => string) => {
  return createEntitySelector<P, TrackProps>(TRACK_ENTITY_NAME, idSelector);
};

export {
  allTracksSelector,
  trackSelector,
};