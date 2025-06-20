import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const apiBaseUrl = "http://localhost:3000/movies/";

export default function MoviesList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(apiBaseUrl).then((res) => {
      setMovies(res.data.data);
    });
  }, []);

  return (
    <div className="container">
      <div className="row g-3">
        {movies.map((movie) => (
          <div key={movie.id} className="col-3">
            <Card
              title={movie.title}
              director={movie.director}
              genre={movie.genre}
              release_year={movie.release_year}
              image={`http://localhost:3000/images/${movie.image}`}
              link={`details/${movie.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
