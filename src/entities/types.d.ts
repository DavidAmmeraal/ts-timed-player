import { createEntityCreator, createEntityUpdateCreator } from './index';
import { TrackEntity } from '../features/tracks';

declare module 'Types' {
  export type EntityName = string;

  export interface EntityProps {
    [key:string]: any,
  }

  export interface EntityPropsCreator<P extends EntityProps> {
    (...args: any): P;
  }

  export interface Entity<N extends EntityName = EntityName, P extends EntityProps = EntityProps> {
    type: N,
    id: string,
    props: P,
  }

  //If T extends an Entity, check it's keys, take the one that extends EntityProps and return a Partial type of that.  
  export type EntityUpdate<T = Entity> = T extends Entity ? {[K in keyof T]: T[K] extends EntityProps ? Partial<T[K]> : never} : never;

  export type EntityCreator = ReturnType<typeof createEntityCreator>;
  export type EntityUpdateCreator = ReturnType<typeof createEntityUpdateCreator>;
  //export type Entity = ReturnType<EntityCreator>
  export type EntityType<T> = T extends EntityCreator ? ReturnType<T> : never;

  export type RootEntity = TrackEntity;
}