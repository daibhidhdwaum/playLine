import ProgressBar from "./ProgressBar";

import PlayerCard from "./PlayerCard";
import Downloads from "./Downloads";
import ContestInfo from "./ContestInfo";
import ContestButtons from "./ContestButtons";

const Contest = () => {
  return (
    <section className="contest">
      <div className="contest__wrapper">
        <ProgressBar />
        <ContestInfo />
        <PlayerCard />
        <ContestButtons />
        <Downloads />
      </div>
    </section>
  );
};

export default Contest;
