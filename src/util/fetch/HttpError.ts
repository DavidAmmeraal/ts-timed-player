/**
 * HttpError.ts
 */

export interface IHttpError extends Error {
  response: Response;
  code: number;
  name: string;
}

export class HttpError extends Error implements IHttpError {
  response: Response;

  code: number;

  constructor(response: Response) {
    super();
    this.name = 'HttpError';
    this.response = response;
    this.code = response.status;
    this.message = `${response.status} - ${response.url}: ${response.statusText}`;
  }
}
