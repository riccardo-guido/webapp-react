import { Link } from "react-router-dom";

export default function Card({
  director,
  genre,
  release_year,
  image,
  title,
  link,
}) {
  return (
    <div className="card h-100 shadow-sm">
      {image && <img className="card-img-top" src={image} alt={title} />}
      <div className="card-body">
        {title && <h5 className="card-title">{title}</h5>}
        <p className="card-text text-muted">
          {director && (
            <>
              🎬 {director}
              <br />
            </>
          )}
          {genre && (
            <>
              🎞️ {genre}
              <br />
            </>
          )}
          {release_year && <>📅 {release_year}</>}
        </p>
        {link && (
          <Link to={link} className="btn btn-primary">
            Vedi altro
          </Link>
        )}
      </div>
    </div>
  );
}
