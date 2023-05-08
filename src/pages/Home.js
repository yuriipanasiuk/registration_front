import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Container from "../components/Container/Container";

const url = "http://localhost:3001/api";

const Home = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name");
  return (
    <Container>
      <Link to={`${url}/users/google`}>Google auth</Link>
      <p style={{ color: "black" }}>{name}</p>
    </Container>
  );
};

export default Home;
