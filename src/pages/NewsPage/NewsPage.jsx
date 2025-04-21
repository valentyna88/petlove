import Container from '../../components/Container/Container';
import SearchField from '../../components/SearchField/SearchField';
import NewsList from '../../components/NewsList/NewsList';
import Pagination from '../../components/Pagination/Pagination';
import Title from '../../components/Title/Title';
import css from './NewsPage.module.css';

const NewsPage = () => {
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
