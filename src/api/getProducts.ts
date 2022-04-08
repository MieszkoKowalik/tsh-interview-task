import { buildUrl } from './buildUrl';

import {
  PorductsRequestParams,
  ProductsResponseData,
} from './ProductsApi.types';

export const getProducts = async (
  params?: PorductsRequestParams,
  init?: RequestInit
): Promise<ProductsResponseData> => {
  const BASE_URL = 'https://join-tsh-api-staging.herokuapp.com/products';

  const response = await fetch(buildUrl(BASE_URL, params), init);
  const data = await response.json();
  return data;
};
