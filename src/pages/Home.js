import { Link } from "react-router-dom";
import TicketImg from "../images/movie-tickets.jpg";
import Layout from "./Layout";

const Home = () => {
  return (
    <Layout title="Find a Movie!">
      <Link to="/movies">
        <img src={TicketImg} alt="movie tickets"></img>
      </Link>
    </Layout>
  );
};

export default Home;
