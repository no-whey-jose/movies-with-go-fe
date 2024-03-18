import { useEffect, useState } from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let moviesList = [
      {
        id: 1,
        title: "The Secret Life of Walter Mitty",
        release_date: "2013-10-05",
        runtime: 114,
        rated: "PG",
        description:
          "When both he and a colleague are about to lose their job, Walter takes action by embarking on an adventure more extraordinary than anything he ever imagined.",
      },
      {
        id: 2,
        title: "Empire Records",
        release_date: "1995-09-22",
        runtime: 90,
        rated: "PG-13",
        description:
          "A day in the life of the employees of Empire Records. Except this is a day where everything comes to a head for a number of them facing personal crises - can they pull through together? And more importantly, can they keep their record store independent and not swallowed up by corporate greed?",
      },
    ];
    setMovies(moviesList);
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
