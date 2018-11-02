class FetchError extends Error {
  constructor(response: Response) {
    super();
    this.name = 'FetchError';
    this.message = `${response.status} - ${response.url}: ${response.statusText}`;
  }
}

export const fetchWithErrors = (uri: string, params?: {}) =>
  fetch(uri, params).then(response => {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      const error = new FetchError(response);
      return Promise.reject(error);
    }
  });
