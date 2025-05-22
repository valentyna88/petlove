import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../../redux/notices/slice';
import { selectFilters } from '../../redux/notices/selectors';
import { selectStyles } from './selectStyles';
import Select from 'react-select';

const FiltersSelect = ({
  options = [],
  filterKey,
  placeholder,
  explicitAll,
  setExplicitAll,
}) => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const currentValue = filters[filterKey];

  const isOptionsArrayOfObjects =
    options.length && typeof options[0] === 'object';

  const mappedOptions = options.map(opt =>
    isOptionsArrayOfObjects ? opt : { value: opt, label: opt }
  );

  const showAllOption = { value: '', label: 'Show all' };
  const selectOptions = [showAllOption, ...mappedOptions];

  const isExplicitAll = explicitAll.includes(filterKey);

  const selectedOption =
    currentValue === ''
      ? isExplicitAll
        ? showAllOption
        : null
      : selectOptions.find(opt => opt.value === currentValue);

  const handleChange = selectedOption => {
    const value = selectedOption?.value ?? '';
    dispatch(setFilters({ ...filters, [filterKey]: value }));

    if (value === '') {
      if (!explicitAll.includes(filterKey)) {
        setExplicitAll(prev => [...prev, filterKey]);
      }
    } else {
      setExplicitAll(prev => prev.filter(f => f !== filterKey));
    }
  };

  return (
    <Select
      options={selectOptions}
      value={selectedOption}
      onChange={handleChange}
      placeholder={placeholder}
      styles={selectStyles}
    />
  );
};

export default FiltersSelect;
