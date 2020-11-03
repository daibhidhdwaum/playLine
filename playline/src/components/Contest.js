import PlayerCard from "./PlayerCard";
import Downloads from "./Downloads";
import ContestInfo from "./ContestInfo";
import ContestButtons from "./ContestButtons";

import progress from "../assets/icons/progress@3x.png";

const Contest = () => {
  return (
    <section className="contest">
      <div className="contest__imageContainer">
        <img src={progress} alt="progress bar" className="contest__image" />
      </div>
      <ContestInfo />
      <PlayerCard />
      <ContestButtons />
      <Downloads />
    </section>
  );
};

export default Contest;
