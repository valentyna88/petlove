import { useState } from 'react';
import ModalEditUser from '../ModalEditUser/ModalEditUser';
import sprite from '../../assets/sprite.svg';
import css from './EditUserBtn.module.css';

const EditUserBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <div className={css.userBoxWrapper}>
        <div className={css.userBox}>
          <p>User</p>
          <svg width={18} height={18}>
            <use href={`${sprite}#icon-user`} />
          </svg>
        </div>

        <button type="button" className={css.editBtn} onClick={openModal}>
          <svg className={css.icon} width={18} height={18}>
            <use xlinkHref={`${sprite}#icon-edit`} />
          </svg>
        </button>
      </div>
      <ModalEditUser isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default EditUserBtn;
