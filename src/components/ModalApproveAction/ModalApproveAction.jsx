import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../redux/auth/operations';
import ModalContainer from '../ModalContainer/ModalContainer';
import toast from 'react-hot-toast';
import css from './ModalApproveAction.module.css';

const ModalApproveAction = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
      navigate('/home');
    } catch (err) {
      console.error(err);
      toast.error('Logout failed. Please try again.');
    } finally {
      onClose();
    }
  };

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose}>
      <div className={css.iconWrapper}>
        <img src="/src/assets/images/signin/cat-icon.png" alt="Cat icon" />
      </div>
      <p className={css.text}>Already leaving?</p>
      <div className={css.actions}>
        <button
          type="button"
          className={css.confirmButton}
          onClick={handleLogout}
        >
          Yes
        </button>
        <button type="button" className={css.cancelButton} onClick={onClose}>
          Cancel
        </button>
      </div>
    </ModalContainer>
  );
};

export default ModalApproveAction;
