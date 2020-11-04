import progress from "../assets/icons/progress@3x.png";

const ProgressBar = () => {
  return (
    <div className="progress">
      <div className="progress__imageContainer">
        <img src={progress} alt="progress bar" className="progress__image" />
      </div>
    </div>
  );
};

export default ProgressBar;
