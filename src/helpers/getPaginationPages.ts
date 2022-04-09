export const getPaginationPages = (
  totalPages: number,
  currentPage: number
): (number | '...')[] => {
  if (totalPages <= 6)
    return [...Array(totalPages)].map((page, index) => index + 1);

  if (currentPage <= totalPages - 3) {
    if (currentPage === 1) {
      return [
        currentPage,
        currentPage + 1,
        currentPage + 2,
        '...',
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    if (currentPage <= totalPages - 4) {
      return [
        currentPage - 1,
        currentPage,
        currentPage + 1,
        '...',
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    } else {
      return [
        currentPage - 2,
        currentPage - 1,
        currentPage,
        '...',
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }
  } else {
    return [1, 2, 3, '...', totalPages - 2, totalPages - 1, totalPages];
  }
};
