import { useDispatch, useSelector } from 'react-redux';
import { fetchLocations } from '../../redux/notices/operations';
import { selectLocations, selectFilters } from '../../redux/notices/selectors';
import { setFilters } from '../../redux/notices/slice';
import { selectStyles } from './selectStyles';
import AsyncSelect from 'react-select/async';
import DropdownIndicator from './DropdownIndicator';
import css from '../NoticesFilters/NoticesFilters.module.css';

const LocationSelect = () => {
  const dispatch = useDispatch();
  const locations = useSelector(selectLocations);
  const filters = useSelector(selectFilters);
  const selectedId = filters.locationId || '';

  const loadOptions = (inputValue, callback) => {
    if (inputValue.trim().length < 3) {
      callback([]);
      return;
    }

    dispatch(fetchLocations(inputValue)).then(res => {
      const data = res?.payload || locations;
      const options = (data || []).map(loc => ({
        value: loc._id,
        label: `${loc.cityEn}, ${loc.countyEn}`,
      }));
      callback(options);
    });
  };

  const selectedOption =
    selectedId && locations.length
      ? locations
          .map(loc => ({
            value: loc._id,
            label: `${loc.cityEn}, ${loc.countyEn}`,
          }))
          .find(opt => opt.value === selectedId)
      : null;

  const handleChange = option => {
    if (!option) {
      dispatch(setFilters({ ...filters, locationId: '' }));
    } else {
      dispatch(setFilters({ ...filters, locationId: option.value }));
    }
  };

  return (
    <div className={css.locationWrapper}>
      <AsyncSelect
        cacheOptions
        loadOptions={loadOptions}
        onChange={handleChange}
        value={selectedOption}
        placeholder="Location"
        styles={selectStyles}
        className={css.select}
        isClearable
        defaultOptions={false}
        noOptionsMessage={() => 'Type at least 3 letters'}
        components={{ DropdownIndicator }}
        filterKey="locationId"
      />
    </div>
  );
};

export default LocationSelect;
