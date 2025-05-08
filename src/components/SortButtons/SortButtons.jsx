import { useDispatch, useSelector } from 'react-redux';
import { selectFilters } from '../../redux/notices/selectors';
import { setFilters } from '../../redux/notices/slice';
import css from '../NoticesFilters/NoticesFilters.module.css';

const sortOptions = ['Popular', 'Unpopular', 'Cheap', 'Expensive'];

const SortButtons = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const handleSortChange = sort => {
    dispatch(setFilters({ ...filters, sort: sort.toLowerCase() }));
  };
  return (
    <div className={css.sortButtons}>
      {sortOptions.map(option => (
        <button
          key={option}
          onClick={() => handleSortChange(option)}
          className={`${css.sortButton} ${
            filters.sort === option.toLowerCase() ? css.active : ''
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
export default SortButtons;
