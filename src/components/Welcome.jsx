import "../styles/mobile.css";

const Welcome = ({ onStart }) => {
  return (
    <>
    <div className="app-wrapper">
      <div className="love-card fade-in">
        <h1 className="mb-4">For My Eternity 🤍🪄</h1>

        <p className="fs-5 mb-4">
          Hy Babe before we start,
          <br />
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
