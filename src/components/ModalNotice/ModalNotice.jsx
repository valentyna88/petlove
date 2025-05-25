import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';
import { formatBirthday } from '../../utils/formatBirthday';
import ModalContainer from '../ModalContainer/ModalContainer';
import sprite from '../../assets/sprite.svg';
import css from './ModalNotice.module.css';

const ModalNotice = ({ notice, isOpen, onClose }) => {
  if (!notice) return null;

  const {
    imgURL,
    species,
    category,
    title,
    price,
    name,
    birthday,
    comment,
    popularity,
    sex,
  } = notice;

  const infoItems = [
    { label: 'Name', value: name },
    { label: 'Birthday', value: formatBirthday(birthday) },
    { label: 'Sex', value: capitalizeFirstLetter(sex) },
    { label: 'Species', value: capitalizeFirstLetter(species) },
  ];

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose}>
      <div className={css.modalContent}>
        <div className={css.imgBox}>
          <img src={imgURL} alt={title} className={css.img} />
        </div>
        <p className={css.category}>{capitalizeFirstLetter(category)}</p>
        <div className={css.titleBox}>
          <h2 className={css.title}>{title}</h2>
          <div className={css.popularityBox}>
            <svg className={css.icon} width={16} height={16}>
              <use xlinkHref={`${sprite}#icon-star`} />
            </svg>
            <p className={css.popularity}>{popularity}</p>
          </div>
        </div>

        <ul className={css.info}>
          {infoItems.map(({ label, value }) => (
            <li key={label} className={css.infoBox}>
              <p className={css.infoTitle}>{label}</p>
              <p className={css.infoText}>{value}</p>
            </li>
          ))}
        </ul>

        <p className={css.comment}>{comment}</p>

        <p className={css.price}>Price: ${price}</p>

        <div className={css.btnBox}>
          <button type="button" className={css.addToBtn}>
            Add to
            <svg className={css.icon} width={18} height={18}>
              <use xlinkHref={`${sprite}#icon-heart`} />
            </svg>
          </button>
          <button type="button" className={css.contactBtn}>
            Contact
          </button>
        </div>
      </div>
    </ModalContainer>
  );
};

export default ModalNotice;
