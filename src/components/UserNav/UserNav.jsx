import { useMediaQuery } from 'react-responsive';
import UserBar from '../UserBar/UserBar';
import LogOutBtn from '../LogOutBtn/LogOutBtn';
import css from './UserNav.module.css';
import clsx from 'clsx';
import { useLocation } from 'react-router-dom';

const UserNav = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/home';
  const tablet = useMediaQuery({ minWidth: 768 });

  return (
    <div className={clsx(css.userNav, { [css.hideOnHome]: isHomePage })}>
      {tablet && !isHomePage && <LogOutBtn />}
      <UserBar showName={tablet} />
    </div>
  );
};

export default UserNav;
