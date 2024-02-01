import React, { useState } from "react";
import { NavMenuContainer } from "./NavMenu.styles.jsx";
import { Link, Outlet } from "react-router-dom";
import SubMenu from "../SubMenu/SubMenu.jsx";

function NavMenu({ className }) {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = (event) => {
    const isLink = event.target.closest("a");
    const isOpenButton = event.target.classList.contains("menuButton");
    if (isLink || isOpenButton) {
      setOpenMenu(!openMenu);
    }
  };

  return (
    <NavMenuContainer>
      <button
        className={`menuButton ${openMenu ? "menu__open" : ""}`}
        onClick={toggleMenu}
      ></button>
      <div className={`menu ${openMenu ? "menu__open" : ""}`}>
        <img
          src="/assets/images/logo.webp"
          alt="soi logo"
          className="menu_logo"
        />
        <ul onClick={toggleMenu}>
          <li>
            <Link to="/">Welcome to a New SOI</Link>
          </li>
          <li>
            <Link to="/a_word_from_our_founders">Word from our Founders</Link>
          </li>
          <li>
            <Link to="/executive_directors_note">
              Executive Director's Note
            </Link>
          </li>
          <li className="submenu">
            <SubMenu title={"Inaugural Year of Discovery"}>
              <ul>
                <li>
                  <Link>In Search of Hydrothermal Lost Cities</Link>
                </li>
                <li>
                  <Link>Health Diagnosis of Deep Sea Coral</Link>
                </li>
                <li>
                  <Link>Octopus Odessey/ Octopus Odessey (too)</Link>
                </li>
                <li>
                  <Link>The Underworld of Hydrothermal Vents</Link>
                </li>
                <li>
                  <Link>Dynamics of Sinking Microplastics</Link>
                </li>
                <li>
                  <Link>Hydrothermal Vents of the Western Galápagos</Link>
                </li>
                <li>
                  <Link>Vertical Reefs of the Galápagos</Link>
                </li>
                <li>
                  <Link>Ultra Fine-Scale Seafloor Mapping</Link>
                </li>
              </ul>
            </SubMenu>
          </li>
          <li>
            <Link to="/by_the_numbers">Inaugural Year - By The Numbers</Link>
          </li>
          <li>
            <Link to="/new_species_and_seafloor_spotlight">
              New Species & Seafloor Spotlight
            </Link>
          </li>
          <li>
            <Link to="/a_limitless_ocean_of_data">
              A Limitless Ocean Of Data
            </Link>
          </li>
          <li>
            <Link to="/disseminating_the_depths">Disseminating The Depths</Link>
          </li>
        </ul>
      </div>
    </NavMenuContainer>
  );
}

export default NavMenu;
