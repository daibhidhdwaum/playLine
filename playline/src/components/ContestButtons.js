import notify from "../assets/icons/notify-me@3x.png";
import moneyBag from "../assets/icons/money-bag@3x.png";

const ContestButtons = () => {
  return (
    <div className="contestButtons">
      <button className="contestButtons__button" aria-label="Notify Me">
        <img
          src={notify}
          alt="Notify me button"
          className="contestButtons__buttonImage"
        />
        <p className="contestButtons__text">Notify Me</p>
      </button>
      <button className="contestButtons__button" aria-label="Deposit">
        <img
          src={moneyBag}
          alt="Deposit button"
          className="contestButtons__buttonImage"
        />
        <p className="contestButtons__text">Deposit</p>
      </button>
    </div>
  );
};

export default ContestButtons;
