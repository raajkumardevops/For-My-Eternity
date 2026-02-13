import { useState } from "react";
import "../styles/mobile.css";
import BackButton from "./BackButton";

const Conversation = ({ onFinish, goBack }) => {
  const [feeling, setFeeling] = useState(null);

  const getMissingStyle = () => {
    if (feeling === "happy") {
      return { transform: "scale(1.15)", fontSize: "1.1rem", padding: "14px" };
    }
    if (feeling === "tired") {
      return { transform: "scale(1.25)", fontSize: "1.2rem", padding: "16px" };
    }
    return {};
  };

  return (
    <div className="app-wrapper">
      <BackButton onBack={goBack} />

      <div className="love-card fade-in">
        

        <p className="fs-5 mb-4">
          Tell me something first… 💭  
          How are you feeling right now?
        </p>

        <button
          className="btn btn-outline-danger w-100 mb-3"
          onClick={() => setFeeling("happy")}
        >
          😊 Happy
        </button>

        <button
          className="btn btn-outline-danger w-100 mb-4"
          onClick={() => setFeeling("tired")}
        >
          😔 A little tired
        </button>

        <button
          className="btn btn-outline-danger w-100"
          style={{ transition: "all 0.4s ease", ...getMissingStyle() }}
          onClick={onFinish}
        >
          🥹 Missing you
        </button>
      </div>
    </div>
  );
};

export default Conversation;
