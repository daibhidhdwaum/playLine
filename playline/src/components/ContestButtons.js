import notify from "../assets/icons/notify-me@3x.png";
import moneyBag from "../assets/icons/money-bag@3x.png";

const ContestButtons = () => {
  return (
    <div className="contestButtons">
      <button className="contestButtons__button">
        <img
          src={notify}
          alt="Notify me button"
          className="contestButtons__buttonImage"
        />
        <p className="contestButtons__text">Notify Me</p>
      </button>
      <button className="contestButtons__button">
        <img
          src={moneyBag}
          alt="Money bag button"
          className="contestButtons__buttonImage"
        />
        <p className="contestButtons__text">Deposit</p>
      </button>
    </div>
  );
};

export default ContestButtons;
