import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark text-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-light" to="/">
            Bank App
          </NavLink>
          <NavLink className="navbar-brand text-light" to="/counter">
            Counter App
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          ></div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
