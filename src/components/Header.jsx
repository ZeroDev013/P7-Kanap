import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import '../styles/header.css';

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="Logo" className="header__img" />
      </Link>
      <nav className="header__nav">       
          <NavLink to="/" style ={({isActive})=>{
            return {textDecoration:isActive?"underline":""}}} className="header__links__style">
            Acceuil
          </NavLink>
          <NavLink to="/About" style ={({isActive})=>{
            return {textDecoration:isActive?"underline":""}}} className="header__links__style">
            A Propos
          </NavLink>        
      </nav>
    </div>
  );
};

export default Header;

