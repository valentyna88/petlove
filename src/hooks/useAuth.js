import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectFavoritesNotices,
} from '../redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const favoritesNotices = useSelector(selectFavoritesNotices);

  return {
    isLoggedIn,
    isRefreshing,
    favoritesNotices,
    user,
  };
};
