import { useMediaQuery } from 'react-responsive';
import dogYellow1xMobile from '../../assets/images/signin/dog-yellow-1x-mobile.png';
import dogYellow2xMobile from '../../assets/images/signin/dog-yellow-2x-mobile.png';
import dogYellow1xTablet from '../../assets/images/signin/dog-yellow-1x-tablet.png';
import dogYellow2xTablet from '../../assets/images/signin/dog-yellow-2x-tablet.png';
import dogYellow1xDesktop from '../../assets/images/signin/dog-yellow-1x-desktop.png';
import dogYellow2xDesktop from '../../assets/images/signin/dog-yellow-2x-desktop.png';
import dogIcon from '../../assets/images/signin/dog-icon.png';
import css from './LoginPetBlock.module.css';

const LoginPetBlock = () => {
  const tablet = useMediaQuery({ minWidth: 768 });

  return (
    <div className={css.imageContainer}>
      <picture>
        <source
          media="(min-width: 1280px)"
          srcSet={`${dogYellow1xDesktop} 1x, ${dogYellow2xDesktop} 2x`}
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${dogYellow1xTablet} 1x, ${dogYellow2xTablet} 2x`}
        />
        <source
          media="(max-width: 767px)"
          srcSet={`${dogYellow1xMobile} 1x, ${dogYellow2xMobile} 2x`}
        />
        <img
          src={dogYellow1xMobile}
          alt="dog yellow"
          width="100%"
          height="auto"
        />
      </picture>

      {tablet && (
        <div className={css.messageWrapper}>
          <div className={css.avatarWrapper}>
            <img
              className={css.avatar}
              src={dogIcon}
              width={60}
              height={60}
              alt="Avatar"
            />
          </div>

          <div className={css.textWrapper}>
            <div className={css.nameWrapper}>
              <p className={css.name}>Rich</p>
              <p className={css.birthday}>
                Birthday:
                <span> 21.09.2020</span>
              </p>
            </div>
            <p className={css.description}>
              Rich would be the perfect addition to an active family that loves
              to play and go on walks. I bet he would love having a doggy
              playmate too!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPetBlock;
