import { GiSpottedBug } from "react-icons/gi";
import "../style/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <GiSpottedBug className="header-icon" />
        <div className="header-text">
          <h1 className="header-title">Insectopedia</h1>
          <p className="header-subtitle">Explora el fascinante mundo de los insectos</p>
        </div>
        <GiSpottedBug className="header-icon header-icon--flipped" />
      </div>
      <div className="header-decoration" />
    </header>
  );
};

export default Header;
