import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectNoticeDetails,
  selectNotices,
} from '../../redux/notices/selectors';
import { fetchNoticeById } from '../../redux/notices/operations';
import { clearNoticeDetails } from '../../redux/notices/slice';
import NoticesItem from '../NoticesItem/NoticesItem';
import ModalAttention from '../ModalAttention/ModalAttention';
import ModalNotice from '../ModalNotice/ModalNotice';
import css from './NoticesList.module.css';

const NoticesList = () => {
  const notices = useSelector(selectNotices);
  const noticeDetails = useSelector(selectNoticeDetails);
  const [isAttentionModalOpen, setAttentionModalOpen] = useState(false);
  const [isNoticeModalOpen, setNoticeModalOpen] = useState(false);
  const [pendingNoticeId, setPendingNoticeId] = useState(null);
  const dispatch = useDispatch();

  const handleOpenAttentionModal = () => setAttentionModalOpen(true);
  const handleCloseAttentionModal = () => setAttentionModalOpen(false);

  const handleLearnMore = noticeId => {
    setPendingNoticeId(noticeId);
  };

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
    if (pendingNoticeId) {
      dispatch(fetchNoticeById(pendingNoticeId));
    }
  }, [pendingNoticeId, dispatch]);

  useEffect(() => {
    if (noticeDetails && pendingNoticeId) {
      setNoticeModalOpen(true);
      setPendingNoticeId(null);
    }
  }, [noticeDetails, pendingNoticeId]);

  const handleCloseNoticeModal = () => {
    setNoticeModalOpen(false);
    dispatch(clearNoticeDetails());
  };

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
              onLearnMore={handleLearnMore}
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
        onClose={handleCloseNoticeModal}
      />
    </ul>
  );
};

export default NoticesList;
