import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './NoticesFilters.module.css';
import {
  fetchCategories,
  fetchGenders,
  fetchNotices,
  fetchPetTypes,
} from '../../redux/notices/operations';
import {
  selectCategories,
  selectFilters,
  selectGenders,
  selectPetTypes,
} from '../../redux/notices/selectors';
import { setFilters, setSearchQuery } from '../../redux/notices/slice';
import SearchField from '../SearchField/SearchField';
import SortButtons from '../SortButtons/SortButtons';
import FiltersSelect from '../FiltersSelect/FiltersSelect';
import LocationSelect from '../FiltersSelect/LocationSelect';

const NoticesFilters = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const genders = useSelector(selectGenders);
  const petTypes = useSelector(selectPetTypes);
  const filters = useSelector(selectFilters);

  const [explicitAll, setExplicitAll] = useState([]);

  const hasActiveFilters = Object.entries(filters).some(
    ([key, value]) =>
      key !== 'currentPage' &&
      key !== 'locationId' &&
      key !== 'sort' &&
      value !== '' &&
      !explicitAll.includes(key)
  );

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchGenders());
    dispatch(fetchPetTypes());
  }, [dispatch]);

  const handleSearch = query => {
    dispatch(setSearchQuery(query));
    dispatch(fetchNotices({ page: 1, limit: 6, searchQuery: query }));
  };

  const handleReset = () => {
    const resetFilters = {
      category: '',
      gender: '',
      petType: '',
      location: '',
      sort: '',
      currentPage: 1,
    };
    dispatch(setFilters(resetFilters));
  };

  return (
    <div className={css.filtersContainer}>
      <SearchField onSearch={handleSearch} />

      <div className={css.selectsWrapper}>
        <FiltersSelect
          options={categories}
          filterKey="category"
          placeholder="Category"
          explicitAll={explicitAll}
          setExplicitAll={setExplicitAll}
        />

        <FiltersSelect
          options={genders}
          filterKey="gender"
          placeholder="By gender"
          explicitAll={explicitAll}
          setExplicitAll={setExplicitAll}
        />
      </div>

      <FiltersSelect
        options={petTypes}
        filterKey="petType"
        placeholder="By type"
        explicitAll={explicitAll}
        setExplicitAll={setExplicitAll}
      />

      <LocationSelect />
      {hasActiveFilters && (
        <button type="button" onClick={handleReset} className={css.resetButton}>
          Reset
        </button>
      )}
      <SortButtons />
    </div>
  );
};

export default NoticesFilters;
