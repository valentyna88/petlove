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
      <div className={css.filters}>
        <div className={css.searchWrapper}>
          <SearchField onSearch={handleSearch} />
        </div>

        <div className={css.selectsWrapper}>
          <div className={css.categoryWrapper}>
            <FiltersSelect
              options={categories}
              filterKey="category"
              placeholder="Category"
              explicitAll={explicitAll}
              setExplicitAll={setExplicitAll}
            />
          </div>

          <div className={css.genderWrapper}>
            <FiltersSelect
              options={genders}
              filterKey="gender"
              placeholder="By gender"
              explicitAll={explicitAll}
              setExplicitAll={setExplicitAll}
            />
          </div>
        </div>

        <div className={css.typeWrapper}>
          <FiltersSelect
            options={petTypes}
            filterKey="petType"
            placeholder="By type"
            explicitAll={explicitAll}
            setExplicitAll={setExplicitAll}
          />
        </div>

        <div className={css.locationWrapper}>
          <LocationSelect />
        </div>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={handleReset}
            className={css.resetButton}
          >
            Reset
          </button>
        )}
      </div>
      <SortButtons />
    </div>
  );
};

export default NoticesFilters;
