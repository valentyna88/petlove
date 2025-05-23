import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentPage,
  selectFilters,
  selectSearchQuery,
  selectTotalPages,
} from '../../redux/notices/selectors';
import { fetchNotices } from '../../redux/notices/operations';
import Container from '../../components/Container/Container';
import NoticesFilters from '../../components/NoticesFilters/NoticesFilters';
import NoticesList from '../../components/NoticesList/NoticesList';
import Pagination from '../../components/Pagination/Pagination';
import Title from '../../components/Title/Title';

const NoticesPage = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(selectSearchQuery);
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);
  const filters = useSelector(selectFilters);

  useEffect(() => {
    dispatch(
      fetchNotices({ page: currentPage, limit: 6, searchQuery, filters })
    );
  }, [dispatch, currentPage, filters, searchQuery]);

  const handlePageChange = page => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    dispatch(fetchNotices({ page, limit: 6, searchQuery, filters }));
  };

  return (
    <Container padding="64">
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
