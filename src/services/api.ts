import { from, Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';

/**
 * Returns an observable that will retrieve a stage file from a given uri.
 * @param uri The uri where the stage should be retrieved from.
 */
const getStage = (uri: string): Observable<{}> =>
  from(fetch(uri)).pipe(flatMap(response => from(response.json())));

export default {
  getStage,
};
