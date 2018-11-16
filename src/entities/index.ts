import Types from 'Types';

export const createEntityCreator = <T extends Types.EntityName, P extends Types.EntityProps>(
  type: T,
  id: string,
  creator: Types.EntityPropsCreator<P>,
) => (...args: any) => ({
  type,
  id,
  props: creator(...args),
});