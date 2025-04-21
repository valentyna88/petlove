import Nav from '../Nav/Nav';
import AuthNav from '../AuthNav/AuthNav';
import sprite from '../../assets/sprite.svg';
import css from './MobileMenu.module.css';
import clsx from 'clsx';

const MobileMenu = ({ closeMenu, isHomePage }) => {
  return (
    <div className={clsx(css.menu, { [css.menuHome]: isHomePage })}>
      <div className={css.menuContent}>
        <button
          className={clsx(css.closeButton, {
            [css.closeButtonHome]: isHomePage,
          })}
          type="button"
          onClick={closeMenu}
        >
          <svg className={css.icon}>
            <use href={`${sprite}#icon-cross-small`}></use>
          </svg>
        </button>
        <Nav closeMenu={closeMenu} isHomePage={isHomePage} />
        <AuthNav isHomePage={isHomePage} />
      </div>
    </div>
  );
};

export default MobileMenu;
