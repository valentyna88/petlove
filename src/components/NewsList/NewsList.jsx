import { useSelector } from 'react-redux';
import { selectNews } from '../../redux/news/selectors';
import NewsItem from '../NewsItem/NewsItem';
import css from './NewsList.module.css';

const NewsList = () => {
  const news = useSelector(selectNews);

  return (
    <ul className={css.newsList}>
      {news.length === 0 ? (
        <p className={css.noResults}>
          Sorry, no news found for this search parameter
        </p>
      ) : (
        news.map(item => (
          <li key={item.id} className={css.newsItem}>
            <NewsItem item={item} />
          </li>
        ))
      )}
    </ul>
  );
};

export default NewsList;
