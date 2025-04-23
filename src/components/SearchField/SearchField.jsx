import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectSearchQuery } from '../../redux/news/selectors';
import sprite from '../../assets/sprite.svg';
import css from './SearchField.module.css';

const SearchField = ({ onSearch }) => {
  const initialQuery = useSelector(selectSearchQuery);
  const [searchQuery, setSearchQuery] = useState(initialQuery || '');

  const handleChange = e => {
    setSearchQuery(e.target.value);
  };

  const handleClear = () => {
    setSearchQuery('');
    onSearch('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(searchQuery.trim());
  };

  return (
    <form onSubmit={handleSubmit} className={css.wrapper}>
      <input
        type="text"
        placeholder="Search"
        className={css.input}
        value={searchQuery}
        onChange={handleChange}
      />
      {searchQuery && (
        <button type="button" onClick={handleClear} className={css.clearButton}>
          <svg className={css.icon}>
            <use href={`${sprite}#icon-cross-small`}></use>
          </svg>
        </button>
      )}
      <button type="submit" className={css.button}>
        <svg className={css.icon}>
          <use href={`${sprite}#icon-search`}></use>
        </svg>
      </button>
    </form>
  );
};

export default SearchField;
