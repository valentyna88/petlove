import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLocations } from '../../redux/notices/operations';
import { selectLocations } from '../../redux/notices/selectors';
import { setFilters } from '../../redux/notices/slice';
import sprite from '../../assets/sprite.svg';
import css from '../NoticesFilters/NoticesFilters.module.css';

const LocationSelect = () => {
  const dispatch = useDispatch();
  const locations = useSelector(selectLocations);
  const [inputValue, setInputValue] = useState('');
  const [filteredLocations, setFilteredLocations] = useState([]);

  const handleInputChange = e => {
    const value = e.target.value;
    setInputValue(value);

    if (value.trim().length >= 3) {
      dispatch(fetchLocations(value));
    } else {
      setFilteredLocations([]);
    }
  };

  useEffect(() => {
    if (inputValue.trim().length >= 3) {
      const formattedInput = inputValue.trim().toLowerCase();
      setFilteredLocations(
        locations
          .filter(loc => loc.cityEn.toLowerCase().startsWith(formattedInput))
          .map(loc => ({
            _id: loc._id,
            label: `${loc.cityEn}, ${loc.countyEn}`,
          }))
      );
    }
  }, [locations, inputValue]);

  const handleSelect = location => {
    dispatch(setFilters({ locationId: location._id }));
    setInputValue(location.label);
    setFilteredLocations([]);
  };

  return (
    <div className={css.locationSelect}>
      <div className={css.inputWrapper}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Location"
          className={css.input}
        />
        <svg className={css.icon}>
          <use href={`${sprite}#icon-search`} />
        </svg>
      </div>

      {filteredLocations.length > 0 && (
        <ul className={css.optionsList}>
          {filteredLocations.map(loc => (
            <li
              key={loc._id}
              className={css.optionItem}
              onClick={() => handleSelect(loc)}
            >
              {loc.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationSelect;
