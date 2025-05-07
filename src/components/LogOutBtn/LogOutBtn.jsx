import { useState } from 'react';
import ModalApproveAction from '../ModalApproveAction/ModalApproveAction';
import css from './LogOutBtn.module.css';

const LogOutBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button type="button" className={css.button} onClick={openModal}>
        Log out
      </button>

      <ModalApproveAction isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default LogOutBtn;
