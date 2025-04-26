import css from './LoginPage.module.css';
import Container from '../../components/Container/Container';
import LoginPetBlock from '../../components/LoginPetBlock/LoginPetBlock';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <Container>
      <div className={css.loginPage}>
        <LoginPetBlock />
        <LoginForm />
      </div>
    </Container>
  );
};

export default LoginPage;
