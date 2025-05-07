import { BounceLoader } from 'react-spinners';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loader}>
      <BounceLoader color="#FFB703" size={60} />
    </div>
  );
};

export default Loader;
