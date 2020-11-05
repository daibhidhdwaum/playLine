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
          {/* Made change to colour of link to increase readability and accessibility */}
          {link}
        </button>
      </li>
    );
  });

  return (
    // I adjusted the positioning of the footer menu so that it is centred and doesn't extend beyond the main content on the left of the page
    <footer className="footer">
      <div className="footer__wrapper">
        <ul className="footer__list" key={footerLinks.index}>
          {/* This is currently set as a button to stop React from yelling. It would be changed to a link when a URL is provided */}
          {button}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
