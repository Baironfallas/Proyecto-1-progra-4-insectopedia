import { GiButterfly } from "react-icons/gi";
import "../style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-rights">
        <GiButterfly />© Insectopedia 2025. Todos los derechos reservados.
      </p>
      <p className="footer-quote">
        "Cada insecto tiene su historia... ¡descúbrela!"
      </p>
    </footer>
  );
};
export default Footer;
