import { useState } from "react";
import "../styles/mobile.css";
import BackButton from "./BackButton";

const Therapy = ({ goNext, goBack }) => {
  const [message, setMessage] = useState("");

  return (
    <div className="app-wrapper">
      <BackButton onBack={goBack} />
      <div className="love-card fade-in">
        

        {!message ? (
          <>
            <p className="fs-5 mb-4 preserve-lines">
              Whenever you feel something…  
              I’m right here 💗
            </p>

            <button
              className="btn btn-outline-danger w-100 mb-3"
              onClick={() =>
                setMessage(
                  `Hey… its okay to feel like this sometimes
                    You dont have to be strong all the time
                    If I were there, Id just sit next to you quietly,
                    hold your hand, and remind you
                    that this feeling will pass — and you will too 🤍`
                )
              }
            >
              💭 When you feel sad
            </button>

            <button
              className="btn btn-outline-danger w-100 mb-3"
              onClick={() =>
                setMessage(
                  `Missing me means your heart knows where it belongs.
                  And mine? It’s already with you.
                  Always has been 🤍`
                )
              }
            >
              🌙 When you miss me
            </button>

            <button
              className="btn btn-outline-danger w-100"
              onClick={() =>
                setMessage(
                  `That smile of yours…
                  it changes the way the world feels to me.
                  I hope you never forget how beautiful you are when you smile like that ✨`
                )
              }
            >
              ✨ When you smile
            </button>

            <button
              className="btn btn-outline-danger w-100 mt-3"
              onClick={goNext}
            >
              See our memories 🖼️
            </button>
          </>
        ) : (
          <>
            <p className="fs-5 mb-4">{message}</p>

            <button
              className="btn btn-outline-danger w-100"
              onClick={() => setMessage("")}
            >
              Back 🤍
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Therapy;
