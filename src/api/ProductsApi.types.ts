export type ProductApiData = {
  id: number;
  name: string;
  description: string;
  rating: number;
  image: string;
  promo: boolean;
  active: boolean;
};

export type ProductsResponseData = {
  items: ProductApiData[];

  meta: {
    itemCount: number;
    totalItems: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };

  links: {
    first: string;
    previous: string;
    next: string;
    last: string;
  };
};

export type PorductsRequestParams = {
  search?: string;
  limit?: number;
  page?: number;
  promo?: boolean;
  active?: boolean;
};
