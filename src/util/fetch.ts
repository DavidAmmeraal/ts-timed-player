export interface IHttpError extends Error{
  response: HttpErrorResponse;
  code: number,
  name: string,
}

interface HttpErrorResponse {
  status: number,
  url: string,
  statusText: string,
}

export class HttpError extends Error implements IHttpError {
  response:HttpErrorResponse;
  code:number;

  constructor(response: HttpErrorResponse) {
    super();
    this.name = 'HttpError';
    this.response = response;
    this.code = response.status;
    this.message = `${response.status} - ${response.url}: ${response.statusText}`;
  }
}

export const httpErrorHandler = (r:Response):Promise<Response> => {
  if(r.status >= 200 && r.status < 300) {
    return Promise.resolve(r);
  } else {
    return Promise.reject(new HttpError(r));
  }
}

export const fetchWithHttpErrorHandler = (uri: string, params?: {}) =>
  fetch(uri, params).then(httpErrorHandler);
