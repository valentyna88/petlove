import { Link } from 'react-router-dom';
import { workHours } from '../../utils/workHours';
import css from './FriendsItem.module.css';

const FriendsItem = ({ friend }) => {
  const { url, imageUrl, title, email, addressUrl, address, phone, workDays } =
    friend;

  const workingHours = workHours(workDays);

  return (
    <>
      <Link
        to={url}
        className={css.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={imageUrl} alt={title} />
      </Link>

      <div className={css.friendInfo}>
        <span className={css.workingHours}>
          {workingHours || 'Day and night'}
        </span>
        <h2 className={css.title}>{title}</h2>
        <p className={css.friendText}>
          Email:{' '}
          <Link className={css.friendLink} to={email ? `mailto:${email}` : '#'}>
            {email || 'website only'}
          </Link>
        </p>

        <p className={css.friendText}>
          Address:{' '}
          <Link
            className={css.friendLink}
            to={addressUrl ? `${addressUrl}` : '#'}
            target="_blank"
            rel="noopener noreferrer"
          >
            {address || 'website only'}
          </Link>
        </p>

        <p className={css.friendText}>
          Phone:{' '}
          <Link className={css.friendLink} to={phone ? `tel: ${phone}` : '#'}>
            {phone || 'website only'}
          </Link>
        </p>
      </div>
    </>
  );
};

export default FriendsItem;
