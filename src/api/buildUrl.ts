export const buildUrl = (baseUrl: string, queryParams?: Object): string => {
  let url = baseUrl;

  if (queryParams) {
    const queryString = Object.entries(queryParams)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    url = url + '?' + queryString;
  }

  return encodeURI(url);
};
