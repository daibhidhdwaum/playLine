import PlayerImage from "./PlayerImage";
import PlayerInfo from "./PlayerInfo";

const PlayersCard = () => {
  return (
    <div className="card__wrapper">
      <div className="card">
        <div className="card__imagesContainer">
          <PlayerImage />
        </div>
        <div className="card__infoContainer">
          <PlayerInfo />
        </div>
      </div>
    </div>
  );
};

export default PlayersCard;
