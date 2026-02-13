import { useState } from "react";
import "../styles/mobile.css";
import BackButton from "./BackButton";

const LoveLetter = ({ goBack }) => {
  const [open, setOpen] = useState(false);

  const letterText = `My love,

I don’t know the perfect words,
but I know how you make me feel.

Every moment with you matters.
Your smile feels like peace.
Your presence feels like home.

No matter what,
remember this —

You are deeply loved.
You are enough.
Always.`;

  return (
    <div className="app-wrapper">
      <BackButton onBack={goBack} />

      <div className={`book ${open ? "open glow" : ""}`}>
        {/* COVER */}
        <div className="book-cover" onClick={() => setOpen(true)}>
          <h2>For My Babe 💖</h2>
          <p>Tap to open</p>
        </div>

        {/* INSIDE */}
        <div className="book-content">
          <p className="preserve-lines">
            {letterText}
          </p>

          <span className="signature">— Forever yours RK 🤍</span>

          <button
            className="btn btn-outline-danger mt-4 w-100"
            onClick={() => setOpen(false)}
          >
            Close letter 🤍
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoveLetter;
