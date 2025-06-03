import sprite from '../../assets/sprite.svg';
import css from './EditUserBtn.module.css';

const EditUserBtn = ({ onEditClick }) => {
  return (
    <>
      <div className={css.userBoxWrapper}>
        <div className={css.userBox}>
          <p>User</p>
          <svg width={18} height={18}>
            <use href={`${sprite}#icon-user`} />
          </svg>
        </div>

        <button type="button" className={css.editBtn} onClick={onEditClick}>
          <svg className={css.icon} width={18} height={18}>
            <use xlinkHref={`${sprite}#icon-edit`} />
          </svg>
        </button>
      </div>
    </>
  );
};

export default EditUserBtn;
