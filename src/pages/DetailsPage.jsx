import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ReviewList from "../components/ReviewList";

export default function DetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/movies/${id}`).then((res) => {
      setMovie(res.data.data);
    });
  }, [id]);

  return (
    <>
      <section>
        <div className="container my-2">
          <h1>{movie.title}</h1>
          <img
            src={`http://localhost:3000/images/${movie.image}`}
            alt={movie.title}
            className="img-fluid rounded shadow-sm"
          />

          <p>
            <strong>Regista:</strong> {movie.director}
          </p>
          <p>
            <strong>Genere:</strong> {movie.genre}
          </p>
          <p>
            <strong>Anno:</strong> {movie.release_year}
          </p>
          <p>
            <strong>Descrizione:</strong> {movie.abstract}
          </p>
        </div>
      </section>

      <section>
        <div className="container my-2">
          <h2>Reviews</h2>
          <ReviewList movieId={id} />
        </div>
      </section>
    </>
  );
}
