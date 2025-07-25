import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { selectNotices } from '../../redux/notices/selectors';
import { selectFavorites } from '../../redux/favorites/selectors';
import { useNoticeModal } from '../../hooks/useNoticeModal';
import NoticesItem from '../NoticesItem/NoticesItem';
import ModalNotice from '../ModalNotice/ModalNotice';
import clsx from 'clsx';
import css from './MyNotices.module.css';

const MyNotices = () => {
  const allNotices = useSelector(selectNotices);
  const favorites = useSelector(selectFavorites);
  const user = useSelector(selectUser);

  const favoriteNotices = allNotices.filter(notice =>
    favorites.includes(notice._id)
  );
  const [activeTab, setActiveTab] = useState('favorites');

  const notices =
    activeTab === 'favorites' ? favoriteNotices : user?.noticesViewed || [];

  const {
    isNoticeModalOpen,
    noticeDetails,
    openNoticeModal,
    closeNoticeModal,
  } = useNoticeModal();

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
              <NoticesItem notice={notice} onLearnMore={openNoticeModal} />
            </li>
          ))
        )}
      </ul>
      <ModalNotice
        isOpen={isNoticeModalOpen}
        notice={noticeDetails}
        onClose={closeNoticeModal}
      />
    </div>
  );
};

export default MyNotices;
