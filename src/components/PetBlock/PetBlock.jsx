import { useMediaQuery } from 'react-responsive';
import catYellow1xMobile from '../../assets/images/signin/cat-yellow-1x-mobile.png';
import catYellow2xMobile from '../../assets/images/signin/cat-yellow-2x-mobile.png';
import catYellow1xTablet from '../../assets/images/signin/cat-yellow-1x-tablet.png';
import catYellow2xTablet from '../../assets/images/signin/cat-yellow-2x-tablet.png';
import catYellow1xDesktop from '../../assets/images/signin/cat-yellow-1x-desktop.png';
import catYellow2xDesktop from '../../assets/images/signin/cat-yellow-2x-desktop.png';
import catIcon from '../../assets/images/signin/cat-icon.png';
import css from './PetBlock.module.css';

const PetBlock = () => {
  const tablet = useMediaQuery({ minWidth: 768 });

  return (
    <div className={css.imageContainer}>
      <picture>
        <source
          media="(min-width: 1280px)"
          srcSet={`${catYellow1xDesktop} 1x, ${catYellow2xDesktop} 2x`}
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${catYellow1xTablet} 1x, ${catYellow2xTablet} 2x`}
        />
        <source
          media="(max-width: 767px)"
          srcSet={`${catYellow1xMobile} 1x, ${catYellow2xMobile} 2x`}
        />
        <img
          src={catYellow1xMobile}
          alt="cat yellow"
          width="100%"
          height="auto"
        />
      </picture>

      {tablet && (
        <div className={css.messageWrapper}>
          <div className={css.avatarWrapper}>
            <img
              className={css.avatar}
              src={catIcon}
              width={60}
              height={60}
              alt="Avatar"
            />
          </div>

          <div className={css.textWrapper}>
            <div className={css.nameWrapper}>
              <p className={css.name}>Jack</p>
              <p className={css.birthday}>
                Birthday:
                <span> 18.10.2021</span>
              </p>
            </div>
            <p className={css.description}>
              Jack is a gray Persian cat with green eyes. He loves to be
              pampered and groomed, and enjoys playing with toys.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PetBlock;
