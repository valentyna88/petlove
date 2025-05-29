import { useAuth } from '../../hooks/useAuth';
import sprite from '../../assets/sprite.svg';
import css from './UserBlock.module.css';

const UserBlock = ({ onOpenModalEditUser }) => {
  const { user } = useAuth();
  return (
    <div className={css.userAvatarBox}>
      <div className={css.userAvatarWrapper}>
        {user?.avatar ? (
          <img src={user.avatar} alt={`Avatar of ${user.name}`} />
        ) : (
          <svg width={40} height={40}>
            <use href={`${sprite}#icon-user`}></use>
          </svg>
        )}
      </div>
      {!user.avatar && (
        <button
          className={css.userAvatarBtn}
          type="button"
          onClick={onOpenModalEditUser}
        >
          Upload photo
        </button>
      )}
    </div>
  );
};

export default UserBlock;
