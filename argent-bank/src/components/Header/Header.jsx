import { NavLink, Link } from "react-router-dom";


import logo from "../../assets/argentBankLogo.png"

import "../Header/Header.css"

export default function Header() {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <NavLink className="main-nav-item" to="/sign-in">
        <i className="fa fa-sign-out"></i>
          Sign In
        </NavLink>
      </div>
    </nav>
  );
}
