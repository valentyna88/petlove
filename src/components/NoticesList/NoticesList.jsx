import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectNotices } from '../../redux/notices/selectors';
import { useNoticeModal } from '../../hooks/useNoticeModal';
import NoticesItem from '../NoticesItem/NoticesItem';
import ModalAttention from '../ModalAttention/ModalAttention';
import ModalNotice from '../ModalNotice/ModalNotice';
import css from './NoticesList.module.css';

const NoticesList = () => {
  const notices = useSelector(selectNotices);

  const [isAttentionModalOpen, setAttentionModalOpen] = useState(false);
  const handleOpenAttentionModal = () => setAttentionModalOpen(true);
  const handleCloseAttentionModal = () => setAttentionModalOpen(false);

  const {
    isNoticeModalOpen,
    noticeDetails,
    openNoticeModal,
    closeNoticeModal,
  } = useNoticeModal();

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
              onLearnMore={openNoticeModal}
            />
          </li>
        ))
      )}
      <ModalAttention
        isOpen={isAttentionModalOpen}
        onClose={handleCloseAttentionModal}
      />
      <ModalNotice
        isOpen={isNoticeModalOpen}
        notice={noticeDetails}
        onClose={closeNoticeModal}
        onOpenAttentionModal={handleOpenAttentionModal}
      />
    </ul>
  );
};

export default NoticesList;
