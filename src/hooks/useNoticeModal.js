import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNoticeById } from '../redux/notices/operations';
import { selectNoticeDetails } from '../redux/notices/selectors';
import { clearNoticeDetails } from '../redux/notices/slice';

export const useNoticeModal = () => {
  const dispatch = useDispatch();
  const noticeDetails = useSelector(selectNoticeDetails);

  const [isNoticeModalOpen, setNoticeModalOpen] = useState(false);
  const [pendingNoticeId, setPendingNoticeId] = useState(null);

  const openNoticeModal = noticeId => {
    setPendingNoticeId(noticeId);
  };

  const closeNoticeModal = () => {
    setNoticeModalOpen(false);
    dispatch(clearNoticeDetails());
  };

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

  return {
    isNoticeModalOpen,
    noticeDetails,
    openNoticeModal,
    closeNoticeModal,
  };
};
