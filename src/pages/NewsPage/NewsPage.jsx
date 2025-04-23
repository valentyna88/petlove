import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentPage,
  selectSearchQuery,
  selectTotalPages,
} from '../../redux/news/selectors';
import { setSearchQuery } from '../../redux/news/slice';
import { fetchNews } from '../../redux/news/operations';
import Container from '../../components/Container/Container';
import SearchField from '../../components/SearchField/SearchField';
import NewsList from '../../components/NewsList/NewsList';
import Pagination from '../../components/Pagination/Pagination';
import Title from '../../components/Title/Title';
import css from './NewsPage.module.css';

const NewsPage = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(selectSearchQuery);
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);

  useEffect(() => {
    dispatch(fetchNews({ page: 1, limit: 6, searchQuery }));
  }, [dispatch, searchQuery]);

  const handleSearch = query => {
    dispatch(setSearchQuery(query));
    dispatch(fetchNews({ page: 1, limit: 6, searchQuery: query }));
  };

  const handlePageChange = page => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    dispatch(fetchNews({ page, limit: 6, searchQuery }));
  };

  return (
    <Container>
      <div className={css.newsSearch}>
        <Title>News</Title>
        <SearchField onSearch={handleSearch} />
      </div>
      <NewsList />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Container>
  );
};

export default NewsPage;
