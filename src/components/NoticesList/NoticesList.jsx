import { useSelector } from 'react-redux';
import { selectNotices } from '../../redux/notices/selectors';
import NoticesItem from '../NoticesItem/NoticesItem';
import css from './NoticesList.module.css';

const NoticesList = () => {
  const notices = useSelector(selectNotices);

  return (
    <>
      {notices.length === 0 && (
        <p className={css.noResults}>
          Sorry, no notices found for this search parameter
        </p>
      )}
      <ul className={css.noticesList}>
        {notices.map(notice => (
          <li key={notice._id} className={css.noticesItem}>
            <NoticesItem notice={notice} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default NoticesList;
