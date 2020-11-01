import logo from "../assets/logo/logo@1x.png";

const Header = () => {
  return (
    <header>
      <h1>PlayLine</h1>
      <div className="imageContainer">
        <img src={logo} alt="PlayLine Logo" />
      </div>
    </header>
  );
};

export default Header;
