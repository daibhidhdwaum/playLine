import appStore from "../assets/icons/ios-app@3x.png";
import googlePlay from "../assets/icons/google-play@3x.png";

const Downloads = () => {
  return (
    <div className="downloads">
      <h2>Download the App</h2>
      <div>
        <button>
          <img src={appStore} alt="App Store button" />
        </button>
        <button>
          <img src={googlePlay} alt="Google Play button" />
        </button>
      </div>
    </div>
  );
};

export default Downloads;
