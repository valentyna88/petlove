import { useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import clsx from 'clsx';
import css from './Header.module.css';

const Header = () => {
  const location = useLocation();

  const isHomePage = location.pathname === '/home';

  return (
    <header
      className={clsx(css.header, {
        [css.homeHeader]: isHomePage,
      })}
    >
      <Logo icon={isHomePage ? 'icon-logo-white' : 'icon-logo-black'} />
      <Nav />
    </header>
  );
};

export default Header;
