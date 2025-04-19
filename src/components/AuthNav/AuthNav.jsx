import { Link } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={css.authNav}>
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
