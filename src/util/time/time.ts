const offsetBase = new Date();

export const getOffset = (date = offsetBase) => {
  return date.getTimezoneOffset() * 60000;
};
