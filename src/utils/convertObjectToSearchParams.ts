export const convertObjectToUrlSearchParams = (
  url: string,
  searchParamsObj: Record<string, string>,
) => {
  const urlObj = new URL(url);
  urlObj.search = new URLSearchParams(searchParamsObj).toString();

  console.log(urlObj, searchParamsObj);

  return urlObj.href;
};
