export interface IHTTPError extends Error{
  response: HTTPErrorResponse;
  code: number,
  name: string,
}

interface HTTPErrorResponse {
  status: number,
  url: string,
  statusText: string,
}

export class HTTPError extends Error implements IHTTPError {
  response:HTTPErrorResponse;
  code:number;

  constructor(response: HTTPErrorResponse) {
    super();
    this.name = 'HTTPError';
    this.response = response;
    this.code = response.status;
    this.message = `${response.status} - ${response.url}: ${response.statusText}`;
  }
}

export const fetchErrorHandler = (r:Response):Promise<Response> => {
  if(r.status >= 200 && r.status < 300) {
    return Promise.resolve(r);
  } else {
    return Promise.reject(new HTTPError(r));
  }
}

export const fetchWithErrors = (uri: string, params?: {}) =>
  fetch(uri, params).then(fetchErrorHandler);
