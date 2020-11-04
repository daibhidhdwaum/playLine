const footerLinks = [
  "About",
  "PLB Bonus",
  "Contact",
  "Security",
  "Responsible Play",
  "Privacy",
  "Terms",
];

const Footer = () => {
  const button = footerLinks.map((link) => {
    return (
      <li className="footer__linkContainer">
        <button className="footer__links">
          <span className="footer__menuPipe">|</span>
          {link}
        </button>
      </li>
    );
  });

  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <ul className="footer__list" key={footerLinks.index}>
          {button}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
