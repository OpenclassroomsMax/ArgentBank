import { NavLink, Link } from "react-router-dom";


import logo from "../../assets/argentBankLogo.png"

import "../Header/Header.css"

export default function Header() {
  return (
    <nav class="main-nav">
      <Link class="main-nav-logo" to="/">
        <img
          class="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 class="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <NavLink class="main-nav-item" to="/sign-in">
        <i className="fa fa-sign-out"></i>
          Sign In
        </NavLink>
      </div>
    </nav>
  );
}
