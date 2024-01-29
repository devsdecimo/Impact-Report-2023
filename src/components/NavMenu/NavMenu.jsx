import React, { useState } from "react";
import { NavMenuContainer } from "./NavMenu.styles.jsx";
import { Link, Outlet } from "react-router-dom";

function NavMenu({ className }) {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <NavMenuContainer>
      <button
        className={`menuButton ${openMenu ? "menu__open" : ""}`}
        onClick={toggleMenu}
      ></button>
      <div className={`menu ${openMenu ? "menu__open" : ""}`}>
        <ul onClick={toggleMenu}>
          <li>
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            <Link to="/a_word_from_our_founders">A Word From Our Founders</Link>{" "}
          </li>
          <li>
            <Link to="/executive_directors_note">Executive Director's Note</Link>{" "}
          </li>
          <li>
            <ul></ul>
          </li>
        </ul>
      </div> 
    </NavMenuContainer>
  );
}

export default NavMenu;
