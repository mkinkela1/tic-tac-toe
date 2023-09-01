export const getSearchParamsFromUrl = (url: string) => {
  const urlObj = new URL(url);
  const params = urlObj.searchParams;

  return Object.fromEntries(params);
};

export const getSearchParamsFromUrlSearchParams = (val: string) => {
  const urlSearchParams = new URLSearchParams(val);

  return Object.fromEntries(urlSearchParams);
};
