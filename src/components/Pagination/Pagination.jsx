import { getPaginationPages } from '../../utils/getPaginationPages';
import { useMediaQuery } from 'react-responsive';
import sprite from '../../assets/sprite.svg';
import css from './Pagination.module.css';
import clsx from 'clsx';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const isTabletOrLarger = useMediaQuery({ query: '(min-width: 768px)' });

  if (totalPages <= 1) return null;

  const visiblePageCount = isTabletOrLarger ? 3 : 2;
  const pages = getPaginationPages(currentPage, totalPages, visiblePageCount);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div className={css.pagination}>
      <ul className={css.paginationList}>
        <li>
          <button
            type="button"
            className={css.button}
            aria-label="First page"
            onClick={() => onPageChange(1)}
            disabled={isFirstPage}
          >
            <svg
              className={clsx(css.iconDouble, {
                [css.iconActive]: !isFirstPage,
              })}
            >
              <use href={`${sprite}#icon-left-arrow`} />
            </svg>
            <svg
              className={clsx(css.iconDouble, {
                [css.iconActive]: !isFirstPage,
              })}
            >
              <use href={`${sprite}#icon-left-arrow`} />
            </svg>
          </button>
        </li>

        <li>
          <button
            type="button"
            className={css.button}
            aria-label="Previous page"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={isFirstPage}
          >
            <svg
              className={clsx(css.icon, {
                [css.iconActive]: !isFirstPage,
              })}
            >
              <use href={`${sprite}#icon-left-arrow`} />
            </svg>
          </button>
        </li>

        {pages.map((page, index) => (
          <li key={index}>
            {page === '...' ? (
              <span className={css.ellipsis}>...</span>
            ) : (
              <button
                className={clsx(css.button, {
                  [css.active]: currentPage === page,
                })}
                onClick={() => onPageChange(page)}
              >
                {page}
              </button>
            )}
          </li>
        ))}

        <li>
          <button
            type="button"
            className={css.button}
            aria-label="Next page"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={isLastPage}
          >
            <svg
              className={clsx(css.icon, {
                [css.iconActive]: !isLastPage,
              })}
            >
              <use href={`${sprite}#icon-right-arrow`} />
            </svg>
          </button>
        </li>

        <li>
          <button
            type="button"
            className={css.button}
            aria-label="Last page"
            onClick={() => onPageChange(totalPages)}
            disabled={isLastPage}
          >
            <svg
              className={clsx(css.icon, {
                [css.iconActive]: !isLastPage,
              })}
            >
              <use href={`${sprite}#icon-right-arrow`} />
            </svg>
            <svg
              className={clsx(css.iconDouble, {
                [css.iconActive]: !isLastPage,
              })}
            >
              <use href={`${sprite}#icon-right-arrow`} />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
