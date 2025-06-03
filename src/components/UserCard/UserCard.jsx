import { useState } from 'react';
import EditUserBtn from '../EditUserBtn/EditUserBtn';
import LogOutBtn from '../LogOutBtn/LogOutBtn';
import PetsBlock from '../PetsBlock/PetsBlock';
import UserBlock from '../UserBlock/UserBlock';
import css from './UserCard.module.css';
import ModalEditUser from '../ModalEditUser/ModalEditUser';

const UserCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <section className={css.userCard}>
      <EditUserBtn onEditClick={openModal} />
      <UserBlock onUploadPhotoClick={openModal} />
      <PetsBlock />
      <LogOutBtn />
      <ModalEditUser isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default UserCard;
