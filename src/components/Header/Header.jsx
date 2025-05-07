import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import MobileMenu from '../MobileMenu/MobileMenu';
import AuthNav from '../AuthNav/AuthNav';
import UserNav from '../UserNav/UserNav';
import clsx from 'clsx';
import sprite from '../../assets/sprite.svg';
import css from './Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/home';
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const isDesktop = useMediaQuery({ minWidth: 1280 });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={clsx(css.header, { [css.homeHeader]: isHomePage })}>
      <Container>
        {!isDesktop && (
          <div className={css.mobileHeader}>
            <Logo icon={isHomePage ? 'icon-logo-white' : 'icon-logo-black'} />

            <div className={css.mobileNav}>
              {isLoggedIn ? (
                <UserNav />
              ) : (
                <AuthNav className={css.authTablet} />
              )}

              <button
                type="button"
                className={css.hamburger}
                onClick={toggleMenu}
              >
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
          </div>
        )}

        {isDesktop && (
          <div className={css.desktopHeader}>
            <Logo icon={isHomePage ? 'icon-logo-white' : 'icon-logo-black'} />
            <Nav closeMenu={closeMenu} isHomePage={isHomePage} />
            {isLoggedIn ? <UserNav /> : <AuthNav />}
          </div>
        )}

        {menuOpen && (
          <MobileMenu closeMenu={closeMenu} isHomePage={isHomePage} />
        )}
      </Container>
    </header>
  );
};

export default Header;
