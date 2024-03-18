import { useEffect, useState } from "react";
import Layout from "./Layout";
import { useParams } from "react-router-dom";

const Movie = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const myMovie = {
      id: 1,
      title: "The Secret Life of Walter Mitty",
      release_date: "2013-10-05",
      runtime: 114,
      rated: "PG",
      description:
        "When both he and a colleague are about to lose their job, Walter takes action by embarking on an adventure more extraordinary than anything he ever imagined.",
    };
    setMovie(myMovie);
  }, [id]);

  const { title, release_date, runtime, rated, description } = movie;
  return (
    <Layout title={title}>
      <p>{description}</p>
      <p className="text-end fs-6 fst-italic">
        {release_date}, {runtime} minutes. Rated {rated}
      </p>
    </Layout>
  );
};

export default Movie;
