import { useState } from "react";
import "../styles/mobile.css";
import BackButton from "./BackButton";

import secretImg from "../assets/images/image2.jpeg"; // your secret image

const SecretMemory = ({ goBack }) => {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div className="app-wrapper">
      <BackButton onBack={goBack} />

      <div className="love-card fade-in">
        {/* 🖼️ SECRET IMAGE CARD */}
        <div
          className="secret-card mb-3"
          onClick={() => setActiveImage(secretImg)}
        >
          <img
            src={secretImg}
            alt="our secret"
            draggable={false}
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>

        {/* 💌 SECRET TEXT CARD */}
        <div className="secret-card">
          <p className="preserve-lines">
            This moment…
            wasn’t planned.
            wasn’t perfect.

            But it was ours.
            And that’s why it means everything 🤍
          </p>
        </div>
      </div>

      {/* 🌸 FULLSCREEN IMAGE VIEW (REUSED) */}
      {activeImage && (
        <div className="image-preview" onClick={() => setActiveImage(null)}>
          <img src={activeImage} alt="full secret memory" />
          <span className="close-preview">✕</span>
        </div>
      )}
    </div>
  );
};

export default SecretMemory;
