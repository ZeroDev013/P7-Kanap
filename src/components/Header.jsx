import { Link, NavLink } from "react-router-dom";
import LOGO from "../assets/images/LOGO.svg";
import '../styles/header.css';

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={LOGO} alt="Logo" className="header__img" />
      </Link>
      <nav className="header__nav">       
          <NavLink to="/" className="header__links__style">
            Acceuil
          </NavLink>
          <NavLink to="/about" className="header__links__style">
            A Propos
          </NavLink>        
      </nav>
    </div>
  );
};

export default Header;
