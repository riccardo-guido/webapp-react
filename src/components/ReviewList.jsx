import ReviewCard from "./ReviewCard";

export default function ReviewList() {
  const reviews = [
    {
      id: 1,
      name: "R",
      vote: 4,
      text: "recensione",
    },
    {
      id: 2,
      name: "R",
      vote: 4,
      text: "recensione",
    },
    {
      id: 3,
      name: "R",
      vote: 4,
      text: "recensione",
    },
  ];

  return (
    <section>
      <div className="container my-2">
        <h2>Reviews</h2>
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
}
