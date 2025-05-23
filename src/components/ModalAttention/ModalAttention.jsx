import { Link } from 'react-router-dom';
import ModalContainer from '../ModalContainer/ModalContainer';
import dogIcon from '../../assets/images/signin/dog-icon.png';
import css from './ModalAttention.module.css';

const ModalAttention = ({ isOpen, onClose }) => {
  return (
    <ModalContainer isOpen={isOpen} onClose={onClose}>
      <div className={css.iconWrapper}>
        <img src={dogIcon} alt="Dog icon" />
      </div>
      <h3 className={css.title}>Attention</h3>
      <p className={css.text}>
        We would like to remind you that certain functionality is available only
        to authorized users.If you have an account, please log in with your
        credentials. If you do not already have an account, you must register to
        access these features.
      </p>
      <div className={css.actions}>
        <Link to="/login" className={css.login}>
          Log In
        </Link>
        <Link to="/register" className={css.register}>
          Registration
        </Link>
      </div>
    </ModalContainer>
  );
};

export default ModalAttention;
