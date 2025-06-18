export default function ReviewCard({ review }) {
  return (
    <div className="d-flex gap-3 py-2 justify-content-between align-items-center border-bottom">
      <div>{review.id}</div>
      <div>{review.name}</div>
      <div>{review.vote}</div>
      <div className="flex-grow-1">{review.text}</div>
    </div>
  );
}
