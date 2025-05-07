import Modal from 'react-modal';
import sprite from '../../assets/sprite.svg';
import css from './ModalContainer.module.css';

Modal.setAppElement('#root');

const ModalContainer = ({
  isOpen = false,
  className = css.modal,
  overlayClassName = css.overlay,
  onClose,
  children,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      className={className}
      overlayClassName={overlayClassName}
      onRequestClose={onClose}
      onAfterOpen={() => (document.body.style.overflow = 'hidden')}
      onAfterClose={() => (document.body.style.overflow = 'unset')}
    >
      <button type="button" className={css.closeButton} onClick={onClose}>
        <svg className={css.icon}>
          <use href={`${sprite}#icon-cross-small`} />
        </svg>
      </button>
      <div className={css.content}>{children}</div>
    </Modal>
  );
};

export default ModalContainer;
