import { buildUrl } from './buildUrl';

import { getProductsParams, ProductsResponseData } from './ProductsApi.types';

export const getProducts = async (
  params?: getProductsParams
): Promise<ProductsResponseData> => {
  const BASE_URL = 'https://join-tsh-api-staging.herokuapp.com/products';

  const response = await fetch(buildUrl(BASE_URL, params));
  const data = await response.json();
  return data;
};
