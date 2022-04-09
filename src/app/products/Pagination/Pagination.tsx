import React from 'react';

import { PaginationList, PaginationButton } from './Pagination.styles';

import { getPaginationPages } from 'helpers/getPaginationPages';

import { PaginationProps } from './Pagination.types';

export const Pagination = ({
  currentPage,
  totalPages,
  setPage,
}: PaginationProps) => {
  if (totalPages < 2) return null;
  const pages = getPaginationPages(totalPages, currentPage);

  return (
    <nav>
      <PaginationList>
        <li>
          <PaginationButton
            disabled={currentPage === 1}
            onClick={() => setPage(currentPage - 1)}
          >
            prev
          </PaginationButton>
        </li>

        {pages.map((page) => (
          <li key={page}>
            {page === '...' ? (
              '...'
            ) : (
              <PaginationButton
                onClick={() => setPage(page)}
                isActive={currentPage === page}
              >
                {page}
              </PaginationButton>
            )}
          </li>
        ))}

        <li>
          <PaginationButton
            disabled={currentPage === totalPages}
            onClick={() => setPage(currentPage + 1)}
          >
            next
          </PaginationButton>
        </li>
      </PaginationList>
    </nav>
  );
};
