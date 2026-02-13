import "../styles/mobile.css";

const Welcome = ({ onStart }) => {
  return (
    <>
    <div className="app-wrapper">
      <div className="love-card fade-in">
        <h1 className="mb-4">For My Eternity 🤍🪄</h1>

        <p className="fs-5 mb-4">
          Hey love 🤍 <br />
          Before you go any further…
        <br /><br />
        I made this little space just for you.  
          No rules. No expectations.  

            Take your time, smile a little,  
            and come in whenever you’re ready 🌸

          <br />  <br />
           Iam going to steal a few moments of your heart 💭
        </p>

        <button
          className="btn btn-lg btn-danger w-100"
          onClick={onStart}
        >
          Okay ❤️
        </button>
      </div>
    </div>
    </>
  );
};

export default Welcome;
