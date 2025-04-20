import css from './Title.module.css';

const Title = ({ children }) => {
  return (
    <>
      <h1 className={css.title}>{children}</h1>
    </>
  );
};

export default Title;
