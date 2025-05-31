import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import clsx from 'clsx';
import css from './UserBar.module.css';
import sprite from '../../assets/sprite.svg';

const UserBar = ({ showName }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/home';

  const { user } = useAuth();

  return (
    <>
      <Link to="/profile" className={css.userLink}>
        {user?.avatar ? (
          <img src={user.avatar} alt={`Avatar of ${user.name}`} />
        ) : (
          <svg width={20} height={20}>
            <use href={`${sprite}#icon-user`} />
          </svg>
        )}
      </Link>

      {showName && (
        <p
          className={clsx(css.userName, {
            [css.userNameHome]: isHomePage,
          })}
        >
          {user.name}
        </p>
      )}
    </>
  );
};

export default UserBar;
