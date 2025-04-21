import sprite from '../../assets/sprite.svg';
import css from './SearchField.module.css';

const SearchField = () => {
  return (
    <div className={css.wrapper}>
      <input type="text" placeholder="Search" className={css.input} />
      <button type="button" className={css.button}>
        <svg className={css.icon}>
          <use href={`${sprite}#icon-search`}></use>
        </svg>
      </button>
    </div>
  );
};

export default SearchField;
