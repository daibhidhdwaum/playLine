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
        <button className="footer__links">{link}</button>
      </li>
    );
  });

  return (
    <footer className="footer">
      <ul className="footer__list" key={footerLinks.index}>
        {button}
      </ul>
    </footer>
  );
};

export default Footer;
