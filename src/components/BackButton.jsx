const BackButton = ({ onBack }) => {
  return (
    <div className="back-arrow-wrapper">
      <button
        className="back-arrow"
        onClick={onBack}
        aria-label="Go back"
      >
        ←
      </button>
    </div>
  );
};

export default BackButton;
