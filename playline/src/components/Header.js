import logo from "../assets/logo/logo@1x.png";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title--visuallyHidden">PlayLine Sports Lotto</h1>
      <div className="header__imageContainer">
        <img src={logo} alt="PlayLine Logo" className="header__image" />
      </div>
    </header>
  );
};

export default Header;
