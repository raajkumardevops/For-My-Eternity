import "../styles/mobile.css";
import BackButton from "./BackButton";

const Surprise = ({ onNext, goBack }) => {
  return (
    <div className="app-wrapper">
      
        <BackButton onBack={goBack} />
        <div className="love-card fade-in">

        <p className="fs-5 mb-4">
          Before you go any further… 💭  
          I want you to know something.
        </p>

        <button
          className="btn btn-outline-danger w-100"
          onClick={onNext}
        >
          Tell me 💖
        </button>
      </div>
    </div>
  );
};

export default Surprise;
