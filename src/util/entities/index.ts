interface Entity {
    id: string;
}

interface EntitiesContainer<T extends Entity> {
    byId:Map<string, T>;
    ids:string[],
}

const entitiesReducer = 