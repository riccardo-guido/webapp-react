import { useEffect, useState } from "react";
import axios from "axios";

const apiBaseUrl = "http://localhost:3000/movies/";

export default function ReviewList({ movieId }) {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    axios
      .get(`${apiBaseUrl}${movieId}/reviews`)
      .then((res) => {
        setReviews(res.data.data);
      })
      .catch((err) => {
        console.error("Errore nel caricamento recensioni:", err);
        setError(err);
      });
  }, [movieId]);

  if (error) return <p>Errore nel caricamento recensioni</p>;
  if (!reviews.length) return <p>Nessuna recensione trovata</p>;

  return (
    <div className="container">
      <ul className="list-group my-4">
        {reviews.map((review) => (
          <li key={review.id} className="list-group-item">
            <strong>{review.name}</strong>: {review.text} – ⭐ {review.vote}
          </li>
        ))}
      </ul>
    </div>
  );
}
