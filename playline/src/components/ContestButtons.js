import notify from "../assets/icons/notify-me@3x.png";
import moneyBag from "../assets/icons/money-bag@3x.png";

const ContestButtons = () => {
  return (
    <div>
      <button>
        <img src={notify} alt="Notify me button" />
      </button>
      <button>
        <img src={moneyBag} alt="Money bag button" />
      </button>
    </div>
  );
};

export default ContestButtons;
