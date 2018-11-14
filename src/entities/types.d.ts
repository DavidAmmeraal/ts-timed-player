import { createEntityCreator } from './index';

declare module 'Types' {
  export type EntityName = string;
  export interface EntityProps {
    id: string;
    [key: string]: any;
  }

  export interface EntityPropsCreator<P extends EntityProps> {
    (id: string, ...args: any): P;
  }

  export interface Entity<T extends EntityName, P extends EntityProps> {
    type: T;
    props: P;
  }
  export type EntityCreator = ReturnType<typeof createEntityCreator>;
  export type EntityType < T > = T extends EntityCreator ? ReturnType<T> : never;
}