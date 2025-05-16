import { useDispatch, useSelector } from 'react-redux';
import Container from '../../components/Container/Container';
import NoticesFilters from '../../components/NoticesFilters/NoticesFilters';
import NoticesList from '../../components/NoticesList/NoticesList';
import Pagination from '../../components/Pagination/Pagination';
import Title from '../../components/Title/Title';
import {
  selectCurrentPage,
  selectFilters,
  selectTotalPages,
} from '../../redux/notices/selectors';
import { useEffect } from 'react';
import { fetchNotices } from '../../redux/notices/operations';
// import css from './NoticesPage.module.css';

const NoticesPage = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);
  const filters = useSelector(selectFilters);

  // useEffect(() => {
  //   dispatch(fetchNotices({ page: 1, limit: 6 }));
  // }, [dispatch]);

  useEffect(() => {
    console.log('Current Filters:', filters);
    dispatch(fetchNotices({ page: currentPage, limit: 6, filters }));
  }, [dispatch, currentPage, filters]);

  const handlePageChange = page => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    dispatch(fetchNotices({ page, limit: 6, filters }));
  };

  return (
    <Container>
      <Title>Find your favorite pet</Title>
      <NoticesFilters />
      <NoticesList />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Container>
  );
};

export default NoticesPage;
