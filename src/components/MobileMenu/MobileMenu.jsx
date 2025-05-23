import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import Nav from '../Nav/Nav';
import AuthNav from '../AuthNav/AuthNav';
import LogOutBtn from '../LogOutBtn/LogOutBtn';
import sprite from '../../assets/sprite.svg';
import clsx from 'clsx';
import css from './MobileMenu.module.css';

const MobileMenu = ({ closeMenu, isHomePage }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={clsx(css.menu, { [css.menuHome]: isHomePage })}>
      <button
        className={clsx(css.closeButton, { [css.closeButtonHome]: isHomePage })}
        onClick={closeMenu}
      >
        <svg className={css.icon}>
          <use href={`${sprite}#icon-cross-small`}></use>
        </svg>
      </button>

      <div className={css.menuContent}>
        <Nav closeMenu={closeMenu} isHomePage={isHomePage} />

        {isLoggedIn ? (
          <div className={css.userNav}>
            <LogOutBtn />
          </div>
        ) : (
          <AuthNav closeMenu={closeMenu} />
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
