import clsx from 'clsx';
import css from './Container.module.css';

const Container = ({ children, padding = 'default' }) => {
  return (
    <div
      className={clsx(
        css.container,
        padding === '32' && css['padding-32'],
        padding === '64' && css['padding-64']
      )}
    >
      {children}
    </div>
  );
};

export default Container;
