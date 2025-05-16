import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './NoticesFilters.module.css';
import {
  fetchCategories,
  fetchGenders,
  fetchPetTypes,
} from '../../redux/notices/operations';
import {
  selectCategories,
  selectGenders,
  selectPetTypes,
} from '../../redux/notices/selectors';
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

  return (
    <div className={css.filtersContainer}>
      <div className={css.filters}>
        <SearchField />
        <div className={css.selectsWrapper}>
          <FiltersSelect
            options={categories}
            filterKey="category"
            placeholder="Category"
          />
          <FiltersSelect
            options={genders}
            filterKey="gender"
            placeholder="By gender"
          />
        </div>
        <FiltersSelect
          options={petTypes}
          filterKey="petType"
          placeholder="By type"
        />
        <LocationSelect />
      </div>
      <SortButtons />
    </div>
  );
};

export default NoticesFilters;
