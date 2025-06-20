import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ReviewList from "../components/ReviewList";
import ReviewForm from "../components/ReviewForm";

const apiBaseUrl = "http://localhost:3000/movies/";

export default function DetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${apiBaseUrl}${id}`).then((res) => {
      setMovie(res.data.data.movie);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <p className="text-center my-5">Caricamento...</p>;
  if (!movie) return <p className="text-danger">Film non trovato</p>;

  return (
    <>
      <section>
        <div className="container my-4">
          <h1>{movie.title}</h1>
          <img
            src={`http://localhost:3000/images/${movie.image}`}
            alt={movie.title}
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
          <p className="mt-3 text-muted">
            🎬 Regista: {movie.director}
            <br />
            🎞️ Genere: {movie.genre}
            <br />
            📅 Anno: {movie.release_year}
          </p>
          <p>{movie.abstract}</p>
        </div>
      </section>

      <ReviewList movieId={movie.id} />

      <ReviewForm movieId={id} />
    </>
  );
}
