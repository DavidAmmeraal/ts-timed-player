import { TrackEntity } from '../tracks';

declare module 'Types' {
  export type EntityName = string;

  export interface EntityProps {
    id: string;
    [key:string]: any;
  }

  export interface Entity<N extends EntityName = EntityName, P extends EntityProps = EntityProps> {
    entityType: N;
    props: P;
  }

  //If T extends an Entity, check it's keys, take the one that extends EntityProps and return a Partial type of that.  
  export type EntityUpdate<T = Entity> = T extends Entity ? {[K in keyof T]: T[K] extends EntityProps ? Partial<T[K]> : never} : never;
  export type EntityDelete<N extends EntityName = EntityName> = {
    entityType: N,
    id: string;
  }
  export type RootEntity = TrackEntity;
}