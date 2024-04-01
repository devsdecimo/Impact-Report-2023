import React, { useState, useEffect } from "react";
import { SubMenuContainer } from "./SubMenu.styles.jsx";
import { useNavigate } from "react-router-dom";

function SubMenu({ children, className, title, href, toggleMain }) {
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const resetClickCount = () => {
      setClickCount(0);
    };

    window.addEventListener("click", resetClickCount);

    return () => {
      window.removeEventListener("click", resetClickCount);
    };
  }, []);

  const toggleSubMenu = (isOpen) => {
    setOpenSubMenu(isOpen);
  };

  const handleTitleClick = (e) => {
    e.stopPropagation(); 

    if (href) {
      if (window.innerWidth <= 830) {
        setClickCount(clickCount + 1);
        if (clickCount >= 1) {
          navigate(href);
          setClickCount(0);
          toggleMain({}, true);
        }
      } else {
        toggleMain({}, true);
        navigate(href);
        setClickCount(0);
      }
    }
  };

  return (
    <SubMenuContainer
      onMouseEnter={() => toggleSubMenu(true)}
      onMouseLeave={() => toggleSubMenu(false)}
      onClick={()=>{toggleSubMenu(!openSubMenu)}}
    >
      <button className={`submenu_title ${openSubMenu ? "submenu__open" : ""}`}>
        {href ? (
          <span onClick={handleTitleClick} className="submenu_title_link">
            {title}
          </span>
        ) : (
          title
        )}
      </button>
      <div className={`contents ${openSubMenu ? "submenu__open" : ""}`}>
        {children}
      </div>
    </SubMenuContainer>
  );
}

export default SubMenu;
