import { useAuth } from '../../hooks/useAuth';
import { formatBirthday } from '../../utils/formatBirthday';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';
import sprite from '../../assets/sprite.svg';
import css from './NoticesItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/favorites/selectors';
import {
  addNoticeToFavorites,
  removeNoticeFromFavorites,
} from '../../redux/favorites/operations';

const NoticesItem = ({ notice, onOpenAttentionModal, onLearnMore }) => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();
  const favorites = useSelector(selectFavorites);
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
    { label: 'Category', value: capitalizeFirstLetter(category) },
  ];

  const handleLearnMore = () => {
    if (!isLoggedIn) {
      onOpenAttentionModal();
      return;
    }
    onLearnMore(notice._id);
  };

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

  return (
    <div className={css.card}>
      <div className={css.cardContent}>
        <div className={css.imgBox}>
          <img src={imgURL} alt={title} className={css.img} />
        </div>

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
      </div>

      <p className={css.price}>Price: ${price}</p>
      <div className={css.btnBox}>
        <button
          type="button"
          className={css.learnMoreBtn}
          onClick={handleLearnMore}
        >
          Learn more
        </button>
        <button
          type="button"
          className={css.likeBtn}
          onClick={handleFavoriteClick}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <svg className={css.icon} width={18} height={18}>
            <use
              xlinkHref={`${sprite}${
                isFavorite ? '#icon-trash' : '#icon-heart'
              }`}
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NoticesItem;
