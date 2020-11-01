import PlayerCard from "./PlayerCard";
import Downloads from "./Downloads";
import ContestInfo from "./ContestInfo";
import ContestButtons from "./ContestButtons";

import progress from "../assets/icons/progress@3x.png";

const Contest = () => {
  return (
    <section>
      <div className="imageContainer">
        <img src={progress} alt="progress bar" />
      </div>
      <ContestInfo />
      <PlayerCard />
      <ContestButtons />
      <Downloads />
    </section>
  );
};

export default Contest;
