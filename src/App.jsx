import { useState } from "react";
import Welcome from "./components/Welcome";
import Conversation from "./components/Conversation";
import MusicPlayer from "./components/MusicPlayer";
import "./styles/mobile.css";
import Surprise from "./components/Surprise";
import Therapy from "./components/Therapy";
import Gallery from "./components/Gallery";
import LoveLetter from "./components/LoveLetter";
import BackButton from "./components/BackButton"; 
import SecretMemory from "./components/SecretMemory";


function App() {
  // 🔁 HISTORY-BASED NAVIGATION
  const [history, setHistory] = useState(["welcome"]);
  const step = history[history.length - 1];

  const [musicOn, setMusicOn] = useState(false);

  // 👉 GO FORWARD
  const goTo = (nextStep) => {
    setHistory((prev) => [...prev, nextStep]);
  };

  // 👉 GO BACK
  const goBack = () => {
    setHistory((prev) =>
      prev.length > 1 ? prev.slice(0, -1) : prev
    );
  };

  return (
    <>
      {/* 🎵 Background Music */}
      <MusicPlayer play={musicOn} />

      {/* ❤️ Floating Hearts */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="heart"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`
          }}
        >
          ❤️
        </div>
      ))}

      {/* 🌸 WELCOME */}
      {step === "welcome" && (
        <Welcome
          onStart={() => {
            setMusicOn(true);
            goTo("conversation");
          }}
        />
      )}

      {/* 💬 CONVERSATION */}
      {step === "conversation" && (
        <Conversation
          onFinish={() => goTo("surprise")}
          goBack={goBack}
        />
      )}

      {/* 🎁 SURPRISE */}
      {step === "surprise" && (
        <Surprise
          onNext={() => goTo("reveal")}
          goBack={goBack}
        />
      )}

            {/* ✨ REVEAL */}
            {step === "reveal" && (
        <div className="app-wrapper">
          {/* ✅ FLOATING BACK ARROW */}
          <BackButton onBack={goBack} />

          <div className="love-card dramatic">
            <h2 className="mb-4 fade-in delay-1">This…</h2>

            <p className="fs-5 fade-in delay-2 mb-4">
              This is for you 💕
            </p>

            <button
              className="btn btn-outline-danger w-100 fade-in delay-2"
              onClick={() => goTo("therapy")}
            >
              Continue 🤍
            </button>

            <button
              className="btn btn-outline-danger w-100 mt-3"
              onClick={() => goTo("gallery")}
            >
              See our memories 🖼️
            </button>
          </div>
        </div>
      )}


      {/* 🧠 THERAPY */}
      {step === "therapy" && (
        <Therapy
          goNext={() => goTo("gallery")}
          goBack={goBack}
        />
      )}

      {/* 🖼️ GALLERY */}
      {step === "gallery" && (
        <Gallery
          goNext={() => goTo("letter")}
          goBack={goBack}
        />
      )}

      {/* 💌 LOVE LETTER */}

      {step === "letter" && (
        <LoveLetter
          goBack={goBack}
          goSecret={() => goTo("secret")}
        />
      )}

      {step === "secret" && (
        <SecretMemory goBack={goBack} />
      )}



    </>
  );
}

export default App;
