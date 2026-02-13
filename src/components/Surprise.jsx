import "../styles/mobile.css";
import BackButton from "./BackButton";

const Surprise = ({ onNext, goBack }) => {
  return (
    <div className="app-wrapper">
      
        <BackButton onBack={goBack} />
        <div className="love-card fade-in">

        <p className="fs-5 mb-4">
          Before you go any further… 💭  <br /> <br />
            Small reminder —<br />

            You’re about to be appreciated me
            a little more than usual 😄🤍
            have only one option just click it

        </p>

        <button
          className="btn btn-outline-danger w-100"
          onClick={onNext}
        >
          Sollitholaa 💖
        </button>
      </div>
    </div>
  );
};

export default Surprise;
