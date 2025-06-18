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
    <div className="card">
      {image && <img className="card-img-top" src={image} alt="" />}
      <div className="card-body">
        {title && <h5 className="card-title">{title}</h5>}
        {
          <p className="card-text">
            {director}
            {genre}
            {release_year}
          </p>
        }

        {link && (
          <Link to={link} className="btn btn-primary">
            {"Vedi altro"}
          </Link>
        )}
      </div>
    </div>
  );
}
