/**
 * index.ts
 * Exports the members of the entities features module.
 */
import * as entitiesActions from './actions';
import { reducer as entitiesReducer, EntitiesAction, EntitiesState } from './reducer';

export { entitiesActions, entitiesReducer, EntitiesAction, EntitiesState };
