import Card from "./Card";
const movies = [
  {
    id: 1,
    title: "The Godfather 1 ",
    director: "Francis Ford Coppola",
    genre: "Crime",
    release_year: 1972,
    abstract:
      "The story of a powerful Italian-American crime family and their struggles.",
    image: "public/movies_cover/the_godfather.jpg",
    created_at: "2024-11-29T10:40:13.000Z",
    updated_at: "2025-05-22T10:55:27.000Z",
  },
  {
    id: 2,
    title: "The Godfather 2 ",
    director: "Francis Ford Coppola",
    genre: "Crime",
    release_year: 1972,
    abstract:
      "The story of a powerful Italian-American crime family and their struggles.",
    image: "public/movies_cover/the_godfather.jpg",
    created_at: "2024-11-29T10:40:13.000Z",
    updated_at: "2025-05-22T10:55:27.000Z",
  },
  {
    id: 3,
    title: "The Godfather 3",
    director: "Francis Ford Coppola",
    genre: "Crime",
    release_year: 1972,
    abstract:
      "The story of a powerful Italian-American crime family and their struggles.",
    image: "public/movies_cover/the_godfather.jpg",
    created_at: "2024-11-29T10:40:13.000Z",
    updated_at: "2025-05-22T10:55:27.000Z",
  },
];

export default function MoviesList() {
  return (
    <div className="container">
      <div className="row g-3">
        {movies.map((movie) => (
          <div key={movie.id} className="col-4">
            <Card
              title={movie.title}
              link={`details/${movies.id}`}
              image={movie.image}
            ></Card>
          </div>
        ))}
      </div>
    </div>
  );
}
