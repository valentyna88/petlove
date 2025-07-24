import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../redux/auth/selectors';
import { selectFavorites } from '../redux/favorites/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const favoritesNotices = useSelector(selectFavorites);

  return {
    isLoggedIn,
    isRefreshing,
    favoritesNotices,
    user,
  };
};
