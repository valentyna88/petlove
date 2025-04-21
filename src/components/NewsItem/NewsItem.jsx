import { formatDate } from '../../utils/formatDate';
import css from './NewsItem.module.css';

const NewsItem = ({ item }) => {
  const { imgUrl, title, text, date, url } = item;
  return (
    <div className={css.card}>
      <img src={imgUrl} alt={title} className={css.img} />
      <h2 className={css.title}>{title}</h2>
      <p className={css.text}>{text}</p>

      <div className={css.readMoreWrapper}>
        <span className={css.date}>{formatDate(date)}</span>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={css.link}
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
