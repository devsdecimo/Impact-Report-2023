import React, { useState } from "react";
import { SubMenuContainer } from "./SubMenu.styles.jsx";
import { Link, Outlet } from "react-router-dom";

function SubMenu({ children, className, title, href }) {
  const [openSubMenu, setOpenSubMenu] = useState(false);

  const toggleSubMenu = (isOpen) => {
    setOpenSubMenu(isOpen);
  };

  return (
    <SubMenuContainer
      onMouseEnter={() => toggleSubMenu(true)}
      onMouseLeave={() => toggleSubMenu(false)}
    >
      <button
        className={`submenu_title ${openSubMenu ? "submenu__open" : ""}`}
        onClick={() => toggleSubMenu(!openSubMenu)}
      >
        {href ? <Link to={href}>{title}</Link> : title}
      </button>
      <div className={`contents ${openSubMenu ? "submenu__open" : ""}`}>
        {children}
      </div>
    </SubMenuContainer>
  );
}

export default SubMenu;
