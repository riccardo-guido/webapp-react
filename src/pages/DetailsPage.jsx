import ReviewList from "../components/ReviewList";

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

export default function DetailsPage() {
  return (
    <>
      <section>
        <div className="container my-2">
          <h1>{movies.title} </h1>
          <img src={movies.image} alt="" />
        </div>
      </section>
      <ReviewList />
      <section>
        <div className="container my-2">
          <h2>Reviews</h2>
          <p>Lista delle recensioni</p>
        </div>
      </section>
    </>
  );
}
