import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectNotices } from '../../redux/notices/selectors';
import NoticesItem from '../NoticesItem/NoticesItem';
import ModalAttention from '../ModalAttention/ModalAttention';
import css from './NoticesList.module.css';

const NoticesList = () => {
  const notices = useSelector(selectNotices);
  const [isAttentionModalOpen, setAttentionModalOpen] = useState(false);

  const handleOpenAttentionModal = () => setAttentionModalOpen(true);
  const handleCloseAttentionModal = () => setAttentionModalOpen(false);

  return (
    <ul className={css.noticesList}>
      {notices.length === 0 ? (
        <p className={css.noResults}>
          Sorry, no notices found for this search parameter
        </p>
      ) : (
        notices.map(notice => (
          <li key={notice._id} className={css.noticesItem}>
            <NoticesItem
              notice={notice}
              onOpenAttentionModal={handleOpenAttentionModal}
            />
          </li>
        ))
      )}
      <ModalAttention
        isOpen={isAttentionModalOpen}
        onClose={handleCloseAttentionModal}
      />
    </ul>
  );
};

export default NoticesList;
