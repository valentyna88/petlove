import Nav from '../Nav/Nav';
import AuthNav from '../AuthNav/AuthNav';
import sprite from '../../assets/sprite.svg';
import css from './MobileMenu.module.css';

const MobileMenu = ({ closeMenu }) => {
  return (
    <div className={css.menu}>
      <button className={css.closeButton} type="button" onClick={closeMenu}>
        <svg width={20} height={20}>
          <use href={`${sprite}#icon-cross-small`}></use>
        </svg>
      </button>
      <Nav closeMenu={closeMenu} />
      <AuthNav />
    </div>
  );
};

export default MobileMenu;
