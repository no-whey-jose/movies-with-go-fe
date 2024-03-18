import TicketImg from "../images/movie-tickets.jpg";
import Layout from "./Layout";

const Home = () => {
  return (
    <Layout title="Find a Movie!">
      <img src={TicketImg} alt="movie tickets"></img>
    </Layout>
  );
};

export default Home;
