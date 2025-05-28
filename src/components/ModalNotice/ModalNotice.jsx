import { useDispatch, useSelector } from 'react-redux';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';
import { formatBirthday } from '../../utils/formatBirthday';
import ModalContainer from '../ModalContainer/ModalContainer';
import sprite from '../../assets/sprite.svg';
import css from './ModalNotice.module.css';
import { selectFavorites } from '../../redux/favorites/selectors';
import { useAuth } from '../../hooks/useAuth';
import {
  addNoticeToFavorites,
  removeNoticeFromFavorites,
} from '../../redux/favorites/operations';

const ModalNotice = ({ notice, isOpen, onClose, onOpenAttentionModal }) => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();
  const favorites = useSelector(selectFavorites);

  if (!notice) return null;

  const isFavorite = favorites.includes(notice._id);

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

  const handleFavoriteClick = () => {
    if (!isLoggedIn) {
      onOpenAttentionModal();
      return;
    }
    if (isFavorite) {
      dispatch(removeNoticeFromFavorites(notice._id));
    } else {
      dispatch(addNoticeToFavorites(notice._id));
    }
  };
  console.log('Email автора:', notice.user?.email);
  console.log('notice:', notice);
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
          <button
            type="button"
            className={css.addToBtn}
            onClick={handleFavoriteClick}
          >
            {isFavorite ? 'Remove from' : 'Add to'}
            <svg className={css.icon} width={18} height={18}>
              <use xlinkHref={`${sprite}#icon-heart`} />
            </svg>
          </button>
          <a
            href={`mailto:${notice.user.email}?subject=${encodeURIComponent(
              `Interested in your pet: "${notice.title}"`
            )}`}
            className={css.contactBtn}
            target="_blank"
          >
            Contact
          </a>
        </div>
      </div>
    </ModalContainer>
  );
};

export default ModalNotice;
