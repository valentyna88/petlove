import { useEffect } from 'react';
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
  selectGenders,
  selectPetTypes,
} from '../../redux/notices/selectors';
import { setSearchQuery } from '../../redux/notices/slice';
import SearchField from '../SearchField/SearchField';
import SortButtons from '../SortButtons/SortButtons';
import FiltersSelect from '../FiltersSelect/FiltersSelect';
import LocationSelect from '../FiltersSelect/LocationSelect';

const NoticesFilters = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const genders = useSelector(selectGenders);
  const petTypes = useSelector(selectPetTypes);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchGenders());
    dispatch(fetchPetTypes());
  }, [dispatch]);

  const handleSearch = query => {
    dispatch(setSearchQuery(query));
    dispatch(fetchNotices({ page: 1, limit: 6, searchQuery: query }));
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
            />
          </div>

          <div className={css.genderWrapper}>
            <FiltersSelect
              options={genders}
              filterKey="gender"
              placeholder="By gender"
            />
          </div>
        </div>

        <div className={css.typeWrapper}>
          <FiltersSelect
            options={petTypes}
            filterKey="petType"
            placeholder="By type"
          />
        </div>

        <div className={css.locationWrapper}>
          <LocationSelect />
        </div>
      </div>
      <SortButtons />
    </div>
  );
};

export default NoticesFilters;
