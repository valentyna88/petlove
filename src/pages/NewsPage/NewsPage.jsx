import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchNews } from '../../redux/news/operations';
import Container from '../../components/Container/Container';
import SearchField from '../../components/SearchField/SearchField';
import NewsList from '../../components/NewsList/NewsList';
import Pagination from '../../components/Pagination/Pagination';
import Title from '../../components/Title/Title';
import css from './NewsPage.module.css';

const NewsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNews(), [dispatch]);
  });

  return (
    <Container>
      <div className={css.newsSearch}>
        <Title>News</Title>
        <SearchField />
      </div>
      <NewsList />
      <Pagination />
    </Container>
  );
};

export default NewsPage;
