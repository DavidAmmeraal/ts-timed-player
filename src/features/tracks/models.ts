/**
 * models.ts
 * Contains track models.
 */
import { Entity } from '../entities';

export interface ITrack extends Entity {
  start: Date;
  end: Date;
}
