import { useState } from "react";

const formInitialData = {
  name: "",
  vote: 1,
  text: "",
};

export default function ReviewForm({ movieId }) {
  const [formData, setFormData] = useState(formInitialData);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("form inviato");
  };
  return (
    <section className="my-5">
      <div className="container my-2">
        <h2>La tua recensione</h2>

        <form className="row g-3" onSubmit={handleFormSubmit}>
          <input type="hidden" value={movieId} name="id_movie" />

          <div className="col-3">
            <label htmlFor="name" className="form-label">
              Nome
            </label>
            <input
              value={formData.name}
              onChange={handleInputChange}
              type="text"
              className="form-control"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="col-3">
            <label htmlFor="vote" className="form-label">
              Voto
            </label>
            <input
              value={formData.vote}
              onChange={handleInputChange}
              type="number"
              className="form-control"
              id="vote"
              name="vote"
              min="1"
              max="10"
              step="1"
              required
            />
          </div>
          <div className="col-9">
            <label htmlFor="text" className="form-label">
              Recensione
            </label>
            <textarea
              name="text"
              id="text"
              className="form-control"
              onChange={handleInputChange}
              rows="5"
              value={formData.text}
              required
            ></textarea>
          </div>
          <div className="col-12">
            <button className="btn btn-primary">Invia</button>
          </div>
        </form>
      </div>
    </section>
  );
}
