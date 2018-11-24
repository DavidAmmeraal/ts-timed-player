/**
 * selectors.ts
 */
import { createAllEntitiesSelector, createEntitySelector } from '../entities/selectors';
import { TRACK_ENTITY_NAME } from './constants';

const allTracksSelector = createAllEntitiesSelector(TRACK_ENTITY_NAME);
const trackSelector = (idSelector:() => string) => createEntitySelector(TRACK_ENTITY_NAME, idSelector);

export {
  allTracksSelector,
  trackSelector,
};