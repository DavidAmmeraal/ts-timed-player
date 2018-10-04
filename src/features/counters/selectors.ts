import { CountersState } from './reducer';

export const getCounter = (state: CountersState) => state.value;
