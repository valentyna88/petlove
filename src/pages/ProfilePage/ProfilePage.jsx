import Container from '../../components/Container/Container';
import UserCard from '../../components/UserCard/UserCard';
import MyNotices from '../../components/MyNotices/MyNotices';

const ProfilePage = () => {
  return (
    <Container>
      <UserCard />
      <MyNotices />
    </Container>
  );
};

export default ProfilePage;
