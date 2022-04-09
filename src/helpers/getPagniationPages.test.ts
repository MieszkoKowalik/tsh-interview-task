import { getPaginationPages } from './getPaginationPages';

describe('getPaginationPages function', () => {
  it('Returns all page numbers when totalPages <=6', () => {
    expect(getPaginationPages(6, 3)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('Correctly returns page numbers when totalPages > 6 and currentPage = 1', () => {
    expect(getPaginationPages(7, 1)).toEqual([1, 2, 3, '...', 5, 6, 7]);
  });

  it('Correctly returns page numbers when totalPages > 6 and currentPage = 2', () => {
    expect(getPaginationPages(7, 2)).toEqual([1, 2, 3, '...', 5, 6, 7]);
  });

  it('Correctly returns page numbers when totalPages > 6 and currentPage = 3', () => {
    expect(getPaginationPages(7, 3)).toEqual([2, 3, 4, '...', 5, 6, 7]);
  });

  it('Correctly returns page numbers when totalPages > 6 and currentPage = totalPages - 3', () => {
    expect(getPaginationPages(7, 4)).toEqual([2, 3, 4, '...', 5, 6, 7]);
  });

  it('Correctly returns page numbers when totalPages > 6 and currentPage >= totalPages - 2', () => {
    expect(getPaginationPages(7, 5)).toEqual([1, 2, 3, '...', 5, 6, 7]);
  });
});
