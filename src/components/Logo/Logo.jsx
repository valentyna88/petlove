import { Link } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';
import css from './Logo.module.css';

const Logo = ({ icon }) => {
  return (
    <Link to="/home">
      <svg className={css.logo} width={17} height={17}>
        <use href={`${sprite}#${icon}`}></use>
      </svg>
    </Link>
  );
};

export default Logo;
