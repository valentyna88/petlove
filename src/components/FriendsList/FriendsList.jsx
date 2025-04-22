import { useSelector } from 'react-redux';
import { selectFriends } from '../../redux/friends/selectors';
import FriendsItem from '../FriendsItem/FriendsItem';
import css from './FriendsList.module.css';

const FriendsList = () => {
  const friends = useSelector(selectFriends);

  return (
    <>
      <ul className={css.friendsList}>
        {friends.map(friend => (
          <li className={css.friendsItem} key={friend._id}>
            <FriendsItem friend={friend} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default FriendsList;
