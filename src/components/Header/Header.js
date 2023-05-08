import { StyledLink, Wraper, Button } from "./Header.styled";
import Container from "../Container/Container";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";

function Header() {
  const { isLoggedIn, user } = useAuth();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout());
  };
  return (
    <Container>
      {isLoggedIn ? (
        <>
          <StyledLink to="/home">Home</StyledLink>
          <Wraper>
            <p>
              Welcome: {user?.name} {user?.email}
            </p>

            <Button type="button" onClick={handleLogOut}>
              Log Out
            </Button>
          </Wraper>
        </>
      ) : (
        <>
          <StyledLink to="/login">Login</StyledLink>
          <StyledLink to="/register">Register</StyledLink>
        </>
      )}
    </Container>
  );
}

export default Header;
