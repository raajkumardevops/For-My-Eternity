import { useState } from "react";
import "../styles/mobile.css";
import BackButton from "./BackButton";

import secretImg from "../assets/images/secret.jpeg"; // your secret image

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
           This moment… <br />
            This day (09/12/2025), the day I turned 21, means everything to me because you made me the happiest person in the world.
            We enjoyed a lot, and it was my birthday.
            I really enjoyed my life that day.  <br /><br />

            I love suspense and surprises, but you made it — I didn’t expect it at all.
            You proved to me once again that you are the only person who makes me happy more than anyone else. <br /> <br />

            Thank you for that day, and thank you for being with me. <br />
            I love you forever and ever <br />
             🤍🫂🪄
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
