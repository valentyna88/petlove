import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import MobileMenu from '../MobileMenu/MobileMenu';
import AuthNav from '../AuthNav/AuthNav';
import clsx from 'clsx';
import sprite from '../../assets/sprite.svg';
import css from './Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/home';

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={clsx(css.header, {
        [css.homeHeader]: isHomePage,
      })}
    >
      <Container>
        <div className={css.mobileHeader}>
          <Logo icon={isHomePage ? 'icon-logo-white' : 'icon-logo-black'} />
          <button type="button" className={css.hamburger} onClick={toggleMenu}>
            <svg
              className={clsx(
                css.icon,
                isHomePage ? css.whiteIcon : css.blackIcon
              )}
            >
              <use href={`${sprite}#icon-burger`} />
            </svg>
          </button>
        </div>

        <div className={css.desktopHeader}>
          <Logo icon={isHomePage ? 'icon-logo-white' : 'icon-logo-black'} />
          <Nav closeMenu={closeMenu} isHomePage={isHomePage} />
          <AuthNav />
        </div>

        {menuOpen && <MobileMenu closeMenu={closeMenu} />}
      </Container>
    </header>
  );
};

export default Header;
