import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <ul className="navlinks">
        <div className="logo">
          <div
            className="logo"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            LOGO
          </div>
        </div>
        <div className="centernav">
          <NavLink className="navlink" to={"/"}>
            <span className="icon">🔥</span>Trending
          </NavLink>
          <NavLink className="navlink" to={"/movies"}>
            <span className="icon">🎬</span>Movies
          </NavLink>
          <NavLink className="navlink" to={"/series"}>
            <span className="icon">📺</span>Tv Series
          </NavLink>
        </div>
        <NavLink className="navlink" to={"/search"}>
          <span className="icon">🔎</span>search
        </NavLink>
      </ul>
    </div>
  );
}

export default Navbar;
