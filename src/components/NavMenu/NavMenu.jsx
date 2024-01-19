import React, { useState } from "react";
import { NavMenuContainer } from "./NavMenu.styles.jsx";

function NavMenu({ className }) {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <NavMenuContainer>
      <button className="menuButton" onClick={toggleMenu}></button>
      <div className={`menu ${openMenu ? "menu__open" : ""}`}></div>
    </NavMenuContainer>
  );
}

export default NavMenu;
