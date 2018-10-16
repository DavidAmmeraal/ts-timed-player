export interface Entity {
    id: string;
}

export interface EntitiesContainer {
    byId: Map<string, Entity>;
    ids: string[],
}