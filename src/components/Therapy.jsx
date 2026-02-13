import { useState } from "react";
import "../styles/mobile.css";

const Therapy = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="app-wrapper">
      <div className="love-card fade-in">
        {!message ? (
          <>
            <p className="fs-5 mb-4">
              Whenever you feel something…  
              I’m right here 💗
            </p>

            <button
              className="btn btn-outline-danger w-100 mb-3"
              onClick={() =>
                setMessage(
                  "It’s okay to feel sad sometimes. Just remember — you’re stronger than you think, and you’re never alone 🤍"
                )
              }
            >
              💭 When you feel sad
            </button>

            <button
              className="btn btn-outline-danger w-100 mb-3"
              onClick={() =>
                setMessage(
                  "Missing someone means your heart knows what love feels like. And mine is always with you 🫂"
                )
              }
            >
              🌙 When you miss me
            </button>

            <button
              className="btn btn-outline-danger w-100"
              onClick={() =>
                setMessage(
                  "That smile of yours? It makes the whole world softer. Never forget how beautiful you are ✨"
                )
              }
            >
              ✨ When you smile
            </button>
          </>
        ) : (
          <div className="fade-in">
            <p className="fs-5 mb-4">{message}</p>

            <button
              className="btn btn-outline-danger w-100"
              onClick={() => setMessage("")}
            >
              Back 🤍
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Therapy;
