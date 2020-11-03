import PlayerCard from "./PlayerCard";
import Downloads from "./Downloads";
import ContestInfo from "./ContestInfo";
import ContestButtons from "./ContestButtons";

import progress from "../assets/icons/progress@3x.png";

const Contest = () => {
  return (
    <section className="contest">
      <div className="contest__wrapper">
        <div className="contest__progressImageContainer">
          <img
            src={progress}
            alt="progress bar"
            className="contest__progressImage"
          />
        </div>
        <ContestInfo />
        <PlayerCard />
        <ContestButtons />
        <Downloads />
      </div>
    </section>
  );
};

export default Contest;
