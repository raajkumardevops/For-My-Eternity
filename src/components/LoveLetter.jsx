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

  const letterText = `For My Eternity

You know what eternity is in Marvel comics.
Eternity is a place that can replace our universe, and it has 99% space even after the universe is replaced.
It is a place where there is no time and endless space.
Like that eternity, you are to me.

You are the person who changed me.

You are the person who always motivates me.

You are the person who always stays with me.

You are the person who always cares for me first.

You are the person who always gives dopamine to me.

You are the person who always teaches me.

You are the person I live for.

Without you, I am just a broken guy with nothing.

I don’t know whether this makes you happy or not, because I am a person who always makes fun of you and irritates you.
But this one is not like that.
I am really happy to do this project, because of you.
Without you, I would never have become a developer.

I am ready to lose my sleep, food, and anything to upgrade myself and place myself in a good position for our future.
I give you my word — we will be forever.

Forgive me, because I have hurt you many times, and I will pay for that.
Whatever I did, I am really sorry for it.

And one last thing —

Whatever and wherever it takes us,
WE FIGHT, WE CRY, WE LAUGH, AND WE LOVE — FOREVER AND EVER  🤍🫂🪄.

Happy Valentine’s Day to my Valentine 🤍`;

  return (
    <div className="app-wrapper">
      <BackButton onBack={goBack} />

      <div className={`book ${open ? "open glow" : ""}`}>
        {/* 📕 COVER */}
        <div className="book-cover" onClick={handleCoverTap}>
          <h2>For My Kutty Babe 🪄</h2>
          <p className="text-danger">Tap once to open!!</p>
        </div>

        {/* 📜 INSIDE */}
        <div className="book-content">
          <p className="preserve-lines">{letterText}</p>

          <span className="signature">— Forever your RK 🤍</span>

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
