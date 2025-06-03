import { useAuth } from '../../hooks/useAuth';
import sprite from '../../assets/sprite.svg';
import css from './UserBlock.module.css';

const UserBlock = ({ onUploadPhotoClick }) => {
  const { user } = useAuth();
  return (
    <>
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
            className={css.uploadPhotoBtn}
            type="button"
            onClick={onUploadPhotoClick}
          >
            Upload photo
          </button>
        )}
      </div>

      <div className={css.myInfoWrapper}>
        <h2 className={css.myInfoTitle}>My information</h2>
        <ul className={css.myInfoList}>
          <li style={{ borderColor: user.name && 'var(--color-accent)' }}>
            {user?.name}
          </li>
          <li style={{ borderColor: user.email && 'var(--color-accent)' }}>
            {user?.email}
          </li>
          <li style={{ borderColor: user.phone && 'var(--color-accent)' }}>
            {user?.phone || '+380'}
          </li>
        </ul>
      </div>
    </>
  );
};

export default UserBlock;
