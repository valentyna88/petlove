import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../../redux/notices/slice';
import { selectFilters } from '../../redux/notices/selectors';
import { selectStyles } from './selectStyles';
import Select from 'react-select';
import css from '../NoticesFilters/NoticesFilters.module.css';

const FiltersSelect = ({ options = [], filterKey, placeholder }) => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const handleChange = option => {
    const value = option ? option.value : '';
    dispatch(setFilters({ ...filters, [filterKey]: value }));
  };

  const isOptionsArrayOfObjects =
    options.length && typeof options[0] === 'object';

  const selectOptions = [
    { value: '', label: 'Show all' },
    ...options.map(opt =>
      isOptionsArrayOfObjects ? opt : { value: opt, label: opt }
    ),
  ];

  return (
    <Select
      options={selectOptions}
      onChange={handleChange}
      placeholder={placeholder}
      styles={selectStyles}
      className={css.select}
    />
  );
};

export default FiltersSelect;
