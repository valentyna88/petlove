import sprite from '../../assets/sprite.svg';

const DropdownIndicator = props => {
  const { filterKey } = props.selectProps;

  if (filterKey === 'locationId') {
    return (
      <components.DropdownIndicator {...props}>
        <svg width="18" height="18" fill="var(--color-gray-light)">
          <use href={`${sprite}#icon-search`} />
        </svg>
      </components.DropdownIndicator>
    );
  }

  return <components.DropdownIndicator {...props} />;
};

export default DropdownIndicator;
