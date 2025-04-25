import Container from '../../components/Container/Container';
import PetBlock from '../../components/PetBlock/PetBlock';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import css from './RegistrationPage.module.css';

const RegistrationPage = () => {
  return (
    <Container>
      <div className={css.registrationPage}>
        <PetBlock />
        <RegistrationForm />
      </div>
    </Container>
  );
};

export default RegistrationPage;
