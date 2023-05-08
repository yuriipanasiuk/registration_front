import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
} from "../redux/auth/selectots";

export const useAuth = () => {
  return {
    isLoggedIn: useSelector(selectIsLoggedIn),
    isRefreshing: useSelector(selectIsRefreshing),
    user: useSelector(selectUser),
  };
};
