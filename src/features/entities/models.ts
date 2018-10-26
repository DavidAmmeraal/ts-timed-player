export interface Entity {
  id: string;
  [key: string]: any;
}

export interface EntitiesContainer {
  byId: {
    [key: string]: Entity;
  };
  ids: string[];
}

const defaultEntitiesContainerProps: EntitiesContainer = {
  byId: {},
  ids: [],
};

export const createEntitiesContainer = () => ({
  ...defaultEntitiesContainerProps,
});