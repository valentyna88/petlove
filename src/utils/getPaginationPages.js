export const getPaginationPages = (currentPage, totalPages, visibleCount) => {
  const pages = [];

  if (totalPages <= visibleCount + 2) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }
  pages.push(1);

  let startPage = Math.max(2, currentPage - Math.floor((visibleCount - 1) / 2));
  let endPage = Math.min(totalPages - 1, startPage + visibleCount - 2);

  if (endPage >= totalPages - 1) {
    startPage = totalPages - visibleCount;
    endPage = totalPages - 1;
  }

  if (startPage > 2) {
    pages.push('...');
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  if (endPage < totalPages - 1) {
    pages.push('...');
  }
  return pages;
};
