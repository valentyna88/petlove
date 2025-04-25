import catYellow1xMobile from '../../assets/images/signin/cat-yellow-1x-mobile.png';
import catYellow2xMobile from '../../assets/images/signin/cat-yellow-2x-mobile.png';
import catYellow1xTablet from '../../assets/images/signin/cat-yellow-1x-tablet.png';
import catYellow2xTablet from '../../assets/images/signin/cat-yellow-2x-tablet.png';
import catYellow1xDesktop from '../../assets/images/signin/cat-yellow-1x-desktop.png';
import catYellow2xDesktop from '../../assets/images/signin/cat-yellow-2x-desktop.png';

const PetBlock = () => {
  return (
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
  );
};

export default PetBlock;
