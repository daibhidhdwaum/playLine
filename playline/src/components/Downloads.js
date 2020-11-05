import appStore from "../assets/icons/ios-app@3x.png";
import googlePlay from "../assets/icons/google-play@3x.png";

const Downloads = () => {
  return (
    <div className="downloads">
      <h2 className="downloads__header">Download the App</h2>
      <div className="downloads__buttonContainer">
        <button className="downloads__button" aria-label="App Store">
          <img
            src={appStore}
            alt="App Store button"
            className="downloads__buttonImage"
          />
        </button>
        <button className="downloads__button" aria-label="Google Play">
          <img
            src={googlePlay}
            alt="Google Play button"
            className="downloads__buttonImage"
          />
        </button>
      </div>
    </div>
  );
};

export default Downloads;
