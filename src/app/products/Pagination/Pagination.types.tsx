export type PaginationProps = {
  totalPages: number;
  currentPage: number;
  setPage: (page: number) => void;
};

export type PaginationItemProps = {
  isActive?: boolean;
};
