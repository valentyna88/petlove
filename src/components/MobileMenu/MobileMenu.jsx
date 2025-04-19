import Nav from '../Nav/Nav';
import AuthNav from '../AuthNav/AuthNav';
import sprite from '../../assets/sprite.svg';
import css from './MobileMenu.module.css';

const MobileMenu = ({ closeMenu }) => {
  return (
    <div className={css.menu}>
      <div className={css.menuContent}>
        <button className={css.closeButton} type="button" onClick={closeMenu}>
          <svg width={20} height={20}>
            <use href={`${sprite}#icon-cross-small`}></use>
          </svg>
        </button>
        <Nav closeMenu={closeMenu} />
        <AuthNav />
      </div>
    </div>
  );
};

export default MobileMenu;
