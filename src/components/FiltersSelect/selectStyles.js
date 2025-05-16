export const selectStyles = {
  control: (provided, state) => ({
    ...provided,
    padding: '12px',
    borderRadius: '30px',
    border:
      state.isFocused || state.menuIsOpen
        ? '1px solid var(--color-accent)'
        : '1px solid transparent',
    backgroundColor: 'var(--bg-secondary)',
    boxShadow: 'none',
    minHeight: 'unset',
    height: 'auto',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'border-color var(--transition)',
    '@media screen and (min-width: 768px)': {
      padding: '14px',
      fontSize: '16px',
    },
    '&:hover': {
      borderColor: 'var(--color-accent)',
    },
  }),
  valueContainer: provided => ({
    ...provided,
    padding: 0,
    margin: 0,
    lineHeight: '1.29',
  }),
  singleValue: provided => ({
    ...provided,
    margin: 0,
    padding: 0,
    color: 'var(--color-text-dark)',
  }),
  placeholder: provided => ({
    ...provided,
    margin: 0,
    padding: 0,
    color: 'var(--color-text-dark)',
  }),
  input: provided => ({
    ...provided,
    margin: 0,
    padding: 0,
  }),
  dropdownIndicator: provided => ({
    ...provided,
    padding: 0,
    margin: 0,
    width: '18px',
    height: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--color-text-dark)',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  menu: provided => ({
    ...provided,
    padding: 0,
    margin: '4px 0',
    borderRadius: '15px',
    boxShadow: 'none',
    backgroundColor: 'var(--bg-secondary)',
    color: 'var(--color-gray-medium)',
    zIndex: 10,
  }),
  option: provided => ({
    ...provided,
    backgroundColor: 'transparent',
    color: 'var(--color-gray-medium)',
    cursor: 'pointer',
    transition: 'background-color var(--transition), color var(--transition)',
    '&:hover': {
      backgroundColor: 'transparent',
      color: 'var(--color-accent)',
    },
  }),
};
