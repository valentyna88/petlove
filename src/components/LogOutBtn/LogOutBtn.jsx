import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logoutUser } from '../../redux/auth/operations';
import css from './LogOutBtn.module.css';

const LogOutBtn = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  if (!user) {
    return null;
  }

  return (
    <button
      type="button"
      className={css.button}
      onClick={() => dispatch(logoutUser())}
    >
      Log out
    </button>
  );
};

export default LogOutBtn;
