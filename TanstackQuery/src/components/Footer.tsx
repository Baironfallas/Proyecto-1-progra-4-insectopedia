// Footer.tsx
import { GiButterfly } from "react-icons/gi";
import "../style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-rights">
          <GiButterfly />© Insectopedia 2025. Todos los derechos reservados.
        </p>

        <div className="footer-divider">
          <span className="footer-divider-line" />
          <GiButterfly className="footer-divider-icon" />
          <span className="footer-divider-line" />
        </div>

        <p className="footer-quote">
          "Cada insecto tiene su historia... ¡descúbrela!"
        </p>
      </div>
    </footer>
  );
};

export default Footer;
