const isObjectEmpty = (obj: object) => {
  return Object.keys(obj).length === 0;
};

export const isNotObjectEmpty = (obj: object) => {
  return !isObjectEmpty(obj);
};
