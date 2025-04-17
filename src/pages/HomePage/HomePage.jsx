import Container from '../../components/Container/Container';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <Container vertical>
      <div className={css.titleBox}>
        <h1 className={css.title}>
          Take good <span className={css.span}>care</span> of your small pets
        </h1>
        <p className={css.text}>
          Choosing a pet for your home is a choice that is meant to enrich your
          life with immeasurable joy and tenderness.
        </p>
      </div>
      <div className={css.bg}></div>
    </Container>
  );
};

export default HomePage;
