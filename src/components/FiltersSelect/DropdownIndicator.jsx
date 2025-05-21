import { components as ReactSelectComponents } from 'react-select';
import sprite from '../../assets/sprite.svg';

const DropdownIndicator = props => {
  const { filterKey } = props.selectProps;

  return (
    <ReactSelectComponents.DropdownIndicator {...props}>
      {filterKey === 'locationId' ? (
        <svg width="18" height="18" fill="transparent" stroke="currentColor">
          <use href={`${sprite}#icon-search`} />
        </svg>
      ) : null}
    </ReactSelectComponents.DropdownIndicator>
  );
};

export default DropdownIndicator;
