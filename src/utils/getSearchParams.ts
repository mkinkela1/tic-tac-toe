export const getSearchParamsFromUrl = (url: string) => {
  const urlObj = new URL(url);
  const params = urlObj.searchParams;

  return Object.fromEntries(params);
};
