import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={css.authNav}>
      <button type="button" className={css.login}>
        Log In
      </button>
      <button type="button" className={css.register}>
        Registration
      </button>
    </div>
  );
};

export default AuthNav;
