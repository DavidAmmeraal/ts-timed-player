import Types from 'Types';

export const createEntityCreator = <T extends Types.EntityName, P extends Types.EntityProps>(
  type: T,
  creator: Types.EntityPropsCreator<P>,
) => (id: string, ...args: any) => ({
  type,
  props: creator(id, args),
});
