import Container from '../../components/Container/Container';
import UserCard from '../../components/UserCard/UserCard';
import MyNotices from '../../components/MyNotices/MyNotices';
import css from './ProfilePage.module.css';

const ProfilePage = () => {
  return (
    <Container>
      <div className={css.profilePageContainer}>
        <UserCard />
        <MyNotices />
      </div>
    </Container>
  );
};

export default ProfilePage;
