import sprite from '../../assets/sprite.svg';
import css from './Pagination.module.css';

const Pagination = () => {
  return (
    <div className={css.pagination}>
      <ul className={css.paginationList}>
        {/* << */}
        <li>
          <button type="button" className={css.button} aria-label="First page">
            <svg className={css.icon}>
              <use href={`${sprite}#icon-left-arrow`} />
            </svg>
            <svg className={css.iconDouble}>
              <use href={`${sprite}#icon-left-arrow`} />
            </svg>
          </button>
        </li>

        {/* < */}
        <li>
          <button
            type="button"
            className={css.button}
            aria-label="Previous page"
          >
            <svg className={css.icon}>
              <use href={`${sprite}#icon-left-arrow`} />
            </svg>
          </button>
        </li>

        {/* Pages */}
        <li>
          <button className={`${css.button} ${css.active}`}>1</button>
        </li>
        <li>
          <button className={css.button}>2</button>
        </li>
        <li>
          <span className={css.ellipsis}>...</span>
        </li>

        {/* > */}
        <li>
          <button type="button" className={css.button} aria-label="Next page">
            <svg className={css.icon}>
              <use href={`${sprite}#icon-right-arrow`} />
            </svg>
          </button>
        </li>

        {/* >> */}
        <li>
          <button type="button" className={css.button} aria-label="Last page">
            <svg width={18} height={18} className={css.icon}>
              <use href={`${sprite}#icon-right-arrow`} />
            </svg>
            <svg width={18} height={18} className={css.iconDouble}>
              <use href={`${sprite}#icon-right-arrow`} />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
