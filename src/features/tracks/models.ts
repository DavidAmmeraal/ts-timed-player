import { Entity } from 'util/entities';

export interface ITrack extends Entity {
    start: Date,
    end: Date,
}