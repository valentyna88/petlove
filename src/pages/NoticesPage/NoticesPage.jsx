import { useDispatch, useSelector } from 'react-redux';
import Container from '../../components/Container/Container';
import NoticesFilters from '../../components/NoticesFilters/NoticesFilters';
import NoticesList from '../../components/NoticesList/NoticesList';
import Pagination from '../../components/Pagination/Pagination';
import Title from '../../components/Title/Title';
import {
  selectCurrentPage,
  selectTotalPages,
} from '../../redux/notices/selectors';
import { useEffect } from 'react';
import { fetchNotices } from '../../redux/notices/operations';
// import css from './NoticesPage.module.css';

const NoticesPage = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);

  useEffect(() => {
    dispatch(fetchNotices({ page: 1, limit: 6 }));
  }, [dispatch]);

  const handlePageChange = page => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    dispatch(fetchNotices({ page, limit: 6 }));
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
