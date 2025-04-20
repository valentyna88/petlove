import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Nav.module.css';

const Nav = ({ closeMenu, isHomePage }) => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(
      css.link,
      isHomePage ? css.white : css.black,
      isActive && css.active
    );
  };

  return (
    <nav className={css.nav}>
      <NavLink to="/news" onClick={closeMenu} className={buildLinkClass}>
        News
      </NavLink>
      <NavLink to="/notices" onClick={closeMenu} className={buildLinkClass}>
        Find pet
      </NavLink>
      <NavLink to="/friends" onClick={closeMenu} className={buildLinkClass}>
        Our friends
      </NavLink>
    </nav>
  );
};

export default Nav;
