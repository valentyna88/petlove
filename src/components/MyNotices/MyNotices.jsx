import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import {
  selectNoticeDetails,
  selectNotices,
} from '../../redux/notices/selectors';
import { clearNoticeDetails } from '../../redux/notices/slice';
import { fetchNoticeById } from '../../redux/notices/operations';
import { selectFavorites } from '../../redux/favorites/selectors';
import NoticesItem from '../NoticesItem/NoticesItem';
import clsx from 'clsx';
import css from './MyNotices.module.css';
import ModalNotice from '../ModalNotice/ModalNotice';

const MyNotices = () => {
  const dispatch = useDispatch();

  const noticeDetails = useSelector(selectNoticeDetails);
  const [isNoticeModalOpen, setNoticeModalOpen] = useState(false);
  const [pendingNoticeId, setPendingNoticeId] = useState(null);

  const allNotices = useSelector(selectNotices);

  const favorites = useSelector(selectFavorites);
  const user = useSelector(selectUser);

  const favoriteNotices = allNotices.filter(notice =>
    favorites.includes(notice._id)
  );
  const [activeTab, setActiveTab] = useState('favorites');

  const notices =
    activeTab === 'favorites' ? favoriteNotices : user?.noticesViewed || [];

  useEffect(() => {
    if (pendingNoticeId) {
      dispatch(fetchNoticeById(pendingNoticeId));
    }
  }, [pendingNoticeId, dispatch]);

  useEffect(() => {
    dispatch(clearNoticeDetails());
    setNoticeModalOpen(false);
  }, [dispatch]);

  useEffect(() => {
    if (noticeDetails && pendingNoticeId) {
      setNoticeModalOpen(true);
      setPendingNoticeId(null);
    }
  }, [noticeDetails, pendingNoticeId]);

  const handleLearnMore = noticeId => {
    setPendingNoticeId(noticeId);
  };

  const handleCloseNoticeModal = () => {
    setNoticeModalOpen(false);
    dispatch(clearNoticeDetails());
  };

  return (
    <div>
      <div className={css.tabs}>
        <button
          className={clsx(css.tab, activeTab === 'favorites' && css.activeTab)}
          onClick={() => setActiveTab('favorites')}
        >
          My favorite pets
        </button>
        <button
          className={clsx(css.tab, activeTab === 'viewed' && css.activeTab)}
          onClick={() => setActiveTab('viewed')}
        >
          Viewed
        </button>
      </div>

      <ul className={css.list}>
        {notices.length === 0 ? (
          <li className={css.emptyMsg}>
            Oops, looks like there aren't any{' '}
            {activeTab === 'favorites' ? 'favorites' : 'viewed'} yet.
          </li>
        ) : (
          notices.map(notice => (
            <li key={notice._id}>
              <NoticesItem notice={notice} onLearnMore={handleLearnMore} />
            </li>
          ))
        )}
      </ul>
      <ModalNotice
        isOpen={isNoticeModalOpen}
        notice={noticeDetails}
        onClose={handleCloseNoticeModal}
      />
    </div>
  );
};

export default MyNotices;
