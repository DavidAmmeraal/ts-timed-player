import queryString from 'query-string';

export interface AppParams {
  stage: string;
}

export default (str = location.search) => {
  const defaultParams: AppParams = {
    stage: process.env.DEFAULT_STAGE,
  };
  const parsed = queryString.parse(str);
  return {
    ...defaultParams,
    ...parsed,
  };
};
