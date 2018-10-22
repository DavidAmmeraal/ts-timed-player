import { Entity } from 'features/entities';

export interface ITrack extends Entity {
    start: Date,
    end: Date,
}