import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentPage,
  selectTotalPages,
} from '../../redux/news/selectors';
import { fetchNews } from '../../redux/news/operations';
import Container from '../../components/Container/Container';
import SearchField from '../../components/SearchField/SearchField';
import NewsList from '../../components/NewsList/NewsList';
import Pagination from '../../components/Pagination/Pagination';
import Title from '../../components/Title/Title';
import css from './NewsPage.module.css';

const NewsPage = () => {
  const dispatch = useDispatch();

  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);

  useEffect(() => {
    dispatch(fetchNews({ page: 1, limit: 6 }));
  }, [dispatch]);

  const handlePageChange = page => {
    dispatch(fetchNews({ page, limit: 6 }));
  };

  return (
    <Container>
      <div className={css.newsSearch}>
        <Title>News</Title>
        <SearchField />
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
