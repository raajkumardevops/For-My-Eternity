import { useState, useEffect, useRef } from "react";
import "../styles/mobile.css";
import BackButton from "./BackButton";

const LoveLetter = ({ goBack, goSecret }) => {
  const [open, setOpen] = useState(false);
  const [tapCount, setTapCount] = useState(0);

  // ⏳ Timer reference to control delayed open
  const openTimerRef = useRef(null);

  // 👉 Just count taps
  const handleCoverTap = () => {
    setTapCount((prev) => prev + 1);
  };

  // 👉 React to tap count changes (SAFE + CLEAN)
  useEffect(() => {
    // Clear any previous timer
    if (openTimerRef.current) {
      clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }

    // 1 tap → wait 1 second, then open letter
    if (tapCount === 1) {
      openTimerRef.current = setTimeout(() => {
        setOpen(true);
      }, 500); // ⏳ 1 second delay
    }

    // 3 taps → secret screen immediately
    if (tapCount === 3) {
      if (openTimerRef.current) {
        clearTimeout(openTimerRef.current);
        openTimerRef.current = null;
      }
      goSecret();
    }
  }, [tapCount, goSecret]);

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
        {/* 📕 COVER */}
        <div className="book-cover" onClick={handleCoverTap}>
          <h2>For My Babe 💖</h2>
          <p>Tap to once to open!!</p>
        </div>

        {/* 📜 INSIDE */}
        <div className="book-content">
          <p className="preserve-lines">{letterText}</p>

          <span className="signature">— Forever yours RK 🤍</span>

          <button
            className="btn btn-outline-danger mt-4 w-100"
            onClick={() => {
              setOpen(false);
              setTapCount(0);

              if (openTimerRef.current) {
                clearTimeout(openTimerRef.current);
                openTimerRef.current = null;
              }
            }}
          >
            Close letter 🤍
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoveLetter;
