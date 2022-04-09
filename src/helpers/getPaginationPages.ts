export const getPaginationPages = (
  totalPages: number,
  currentPage: number
): (number | '...')[] => {
  const allPages = [...Array(totalPages)].map((page, index) => index + 1);

  const NO_OF_PAGES_PER_SIDE = 3;
  const MAX_PAGES_LENGTH = NO_OF_PAGES_PER_SIDE * 2;

  if (totalPages <= MAX_PAGES_LENGTH) {
    return allPages;
  }

  const rightSidePages = allPages.slice(-NO_OF_PAGES_PER_SIDE);
  const currentPageIndex = currentPage - 1;

  let leftSideStartIndex: number = 0;

  const isOnTheRightSide = rightSidePages.includes(currentPage);
  if (isOnTheRightSide) {
    leftSideStartIndex = 0;
  }

  const firstRightPageNumber = rightSidePages[0];

  const isLastValidLeftNumber = currentPage === firstRightPageNumber - 1;
  if (isLastValidLeftNumber) {
    leftSideStartIndex = currentPageIndex - 2;
  }

  if (currentPage <= firstRightPageNumber - 2) {
    leftSideStartIndex = Math.max(0, currentPageIndex - 1);
  }

  const leftSideEndIndex = leftSideStartIndex + NO_OF_PAGES_PER_SIDE;
  const leftSidePages = allPages.slice(leftSideStartIndex, leftSideEndIndex);

  const lastLeftPageNumber = leftSidePages[leftSidePages.length - 1];

  const shouldBeSplitted = firstRightPageNumber - lastLeftPageNumber !== 1;

  if (shouldBeSplitted) {
    return [...leftSidePages, '...', ...rightSidePages];
  } else {
    return [...leftSidePages, ...rightSidePages];
  }
};
