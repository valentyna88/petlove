import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFriends } from '../../redux/friends/operations';
import Container from '../../components/Container/Container';
import Title from '../../components/Title/Title';
import FriendsList from '../../components/FriendsList/FriendsList';

const OurFriendsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);
  return (
    <Container padding="64">
      <Title>Our friends</Title>
      <FriendsList />
    </Container>
  );
};

export default OurFriendsPage;
