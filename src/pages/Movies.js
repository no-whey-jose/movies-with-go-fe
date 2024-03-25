import { useEffect, useState } from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const reqOptions = {
      method: "GET",
      headers,
    };

    fetch(`http://localhost:8080/movies`, reqOptions)
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Layout title="Movies">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Movie</th>
            <th>Release Date</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </td>
              <td>{movie.release_date}</td>
              <td>{movie.rated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default Movies;
