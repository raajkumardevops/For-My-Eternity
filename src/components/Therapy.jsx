import { useState } from "react";
import "../styles/mobile.css";
import BackButton from "./BackButton";

const Therapy = ({ goNext, goBack }) => {
  const [message, setMessage] = useState("");

  return (
    <div className="app-wrapper">
      <BackButton onBack={goBack} />
      <div className="love-card fade-in">
        

        {!message ? (
          <>
            <p className="fs-5 mb-4 preserve-lines">
              Whenever you feel something…  
                and it feels too much, or too heavy…<br /><br />

                You don’t have to be strong here. <br /> 
                I’m right here,  
                and I’m not going anywhere 🤍🫂

            </p>

            <button
              className="btn btn-outline-danger w-100 mb-3"
              onClick={() =>
                setMessage(
                  `Hey… it’s okay to feel like this sometimes. 
                    You don’t have to be strong when you’re with me.

                    I were there for you 🫂,  
                    I’d sit next to you in the quiet,  
                    hold your hand 🫴, hugs you tight 🫂🫂
                    and let you feel everything without rushing you.

                    This feeling will pass.  
                    And I’ll still be right here 🤍
                    `
                )
              }
            >
              💭 When you feel sad
            </button>

            <button
              className="btn btn-outline-danger w-100 mb-3"
              onClick={() =>
                setMessage(
                  `Missing me just means your heart knows where it feels safe.
                      And mine…  
                      it never learned how to leave you.

                      Even if one day I’m not there in a physical way,  
                      wherever life takes me, my soul will stay with you.

                      I don’t belong to heaven or hell —  
                      I only belong with you 🤍
                    `
                )
              }
            >
              🌙 When you miss me
            </button>

            <button
              className="btn btn-outline-danger w-100"
              onClick={() =>
                setMessage(
                  `That smile of yours…  
                      it changes the way the world feels to me.

                      Everything feels worth facing  
                      when I know it comes back to your happiness.

                      I’m ready for the struggles,  
                      the pain, the consequences —  
                      all of it —  
                      if it means seeing you smile.

                      This isn’t just something I say.  
                      You know me well enough .  
                      once I give my word, I stand by it…  
                      forever and ever 🤍
                  `
                )
              }
            >
              ✨ When you smile
            </button>

            <button
              className="btn btn-outline-danger w-100 mt-3"
              onClick={goNext}
            >
              See our memories 🖼️
            </button>
          </>
        ) : (
          <>
            <p className="fs-5 mb-4">{message}</p>

            <button
              className="btn btn-outline-danger w-100"
              onClick={() => setMessage("")}
            >
              Back 🤍
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Therapy;
