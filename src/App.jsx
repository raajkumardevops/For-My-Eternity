import { useState, useEffect} from "react";
import Welcome from "./components/Welcome";
import Conversation from "./components/Conversation";
import MusicPlayer from "./components/MusicPlayer";
import "./styles/mobile.css";
import Surprise from "./components/Surprise";
import Therapy from "./components/Therapy";
import Gallery from "./components/Gallery";


function App() {
  const [step, setStep] = useState("welcome");
  const [musicOn, setMusicOn] = useState(false);

  useEffect(() => {
  const goGallery = () => setStep("gallery");
  window.addEventListener("goGallery", goGallery);
  return () => window.removeEventListener("goGallery", goGallery);
}, []);


  return (
    <>
      {/* Background Music */}
      <MusicPlayer play={musicOn} />

      {/* Floating Hearts */}
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

      {step === "welcome" && (
        <Welcome
          onStart={() => {
            setMusicOn(true);   // 🎵 MUSIC STARTS HERE
            setStep("conversation");
          }}
        />
      )}

      {step === "conversation" && (
        <Conversation onFinish={() => setStep("surprise")} />
      )}

      {step === "surprise" && (
        <Surprise onNext={() => setStep("reveal")} />
      )}

      {step === "reveal" && (
        <div className="app-wrapper">
          <div className="love-card dramatic">
            <h2 className="mb-4 fade-in delay-1">
              This…
            </h2>

            <p className="fs-5 fade-in delay-2 mb-4">
              This is for you 💕
            </p>

            <button
              className="btn btn-outline-danger w-100 fade-in delay-2"
              onClick={() => setStep("therapy")}
            >
              Continue 🤍
            </button>

              <button
                className="btn btn-outline-danger w-100 mt-3"
                onClick={() => window.dispatchEvent(new Event("goGallery"))}
              >
                See our memories 🖼️
              </button>
          </div>
        </div>
      )}

      {step === "therapy" && <Therapy />}
      {/* 👉 THIS IS WHERE GALLERY GOES */}
      {step === "gallery" && <Gallery />}

    </>
  );
}

export default App;
