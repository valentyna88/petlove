import EditUserBtn from '../EditUserBtn/EditUserBtn';
import LogOutBtn from '../LogOutBtn/LogOutBtn';
import PetsBlock from '../PetsBlock/PetsBlock';
import UserBlock from '../UserBlock/UserBlock';
import css from './UserCard.module.css';

const UserCard = () => {
  return (
    <section className={css.userCard}>
      <EditUserBtn />
      <UserBlock />
      <PetsBlock />
      <LogOutBtn />
    </section>
  );
};

export default UserCard;
