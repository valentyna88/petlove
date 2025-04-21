import { Link } from 'react-router-dom';
import css from './AuthNav.module.css';
import clsx from 'clsx';

const AuthNav = ({ className = '' }) => {
  return (
    <div className={clsx(css.authNav, className)}>
      <Link to="/login" className={css.login}>
        Log In
      </Link>
      <Link to="/register" className={css.register}>
        Registration
      </Link>
    </div>
  );
};

export default AuthNav;
