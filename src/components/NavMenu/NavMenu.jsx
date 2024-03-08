import React, { useState } from "react";
import { NavMenuContainer } from "./NavMenu.styles.jsx";
import { Link, Outlet } from "react-router-dom";
import SubMenu from "../SubMenu/SubMenu.jsx";

function NavMenu({ className }) {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = (event, closeException = false) => {
    if (!closeException) {
      const isLink = event.target.closest("a");
      const isOpenButton = event.target.classList.contains("menuButton");
      if (isLink || isOpenButton) {
        setOpenMenu(!openMenu);
        if (!openMenu) {
          document.body.classList.add("no-scroll");
        } else {
          document.body.classList.remove("no-scroll");
        }
      }
    } else {
      setOpenMenu(false);
      document.body.classList.remove("no-scroll");
    }
  };

  return (
    <NavMenuContainer>
      <button
        className={`menuButton ${openMenu ? "menu__open" : ""}`}
        onClick={toggleMenu}
      ></button>
      <div className={`menu ${openMenu ? "menu__open" : ""}`}>
        <Link to="/" onClick={toggleMenu}>
          <img
            src="/assets/images/logo.webp"
            alt="soi logo"
            className="menu_logo"
          />
        </Link>
        <ul onClick={toggleMenu}>
          <li className="submenu">
            <SubMenu
              href="/"
              title={"Welcome to a New SOI"}
              toggleMain={toggleMenu}
            >
              <ul>
                <li>
                  <Link to="/a_word_from_our_founders">
                    Word from our Founders
                  </Link>
                </li>
                <li>
                  <Link to="/executive_directors_note">
                    Executive Director's Note
                  </Link>
                </li>
              </ul>
            </SubMenu>
          </li>
          <li className="submenu">
            <SubMenu title={"Inaugural Year of Discovery"}>
              <ul>
                <li>
                  <Link to="/expeditions/in_search_of_hydrothermal_lost_cities">
                    In Search of Hydrothermal Lost Cities
                  </Link>
                </li>
                <li>
                  <Link to="/expeditions/health_diagnosis_of_deep_sea_coral">Health Diagnosis of Deep Sea Coral</Link>
                </li>
                <li>
                  <Link to="/expeditions/octopus_odyssey">Octopus Odyssey/ Octopus Odyssey (too)</Link>
                </li>
                <li>
                  <Link to="/expeditions/the_underworld_of_hydrothermal_vents">The Underworld of Hydrothermal Vents</Link>
                </li>
                <li>
                  <Link to="/expeditions/dynamics_of_sinking_microplastics">Dynamics of Sinking Microplastics</Link>
                </li>
                <li>
                  <Link to="/expeditions/hydrothermal_vents_of_the_galapagos">Hydrothermal Vents of the Western Galápagos</Link>
                </li>
                <li>
                  <Link to="/expeditions/vertical_reefs_of_the_galapagos">Vertical Reefs of the Galápagos</Link>
                </li>
                <li>
                  <Link to="/expeditions/ultra_fine_scale_seafloor_mapping">Ultra Fine-Scale Seafloor Mapping</Link>
                </li>
              </ul>
            </SubMenu>
          </li>
          <li>
            <Link to="/new_species_spotlight">New Species Spotlight</Link>
          </li>
          <li>
            <Link to="/by_the_numbers">Inaugural Year - By the Numbers</Link>
          </li>
          <li>
            <Link to="/a_limitless_ocean_of_data">
              A Limitless Ocean of Data
            </Link>
          </li>
          <li>
            <SubMenu title={"The Deep Sea Continuum"} toggleMain={toggleMenu}>
              <ul>
                <li>
                  <Link to="/the_deep_sea_continuum/grants">Grants</Link>
                </li>
                <li>
                  <Link to="/the_deep_sea_continuum/thought_leadership">
                    Thought Leadership
                  </Link>
                </li>
                <li>
                  <Link to="/the_deep_sea_continuum/strategic_partnerships">
                    Strategic Partnerships
                  </Link>
                </li>
              </ul>
            </SubMenu>
          </li>
          <li>
            <SubMenu title={"Disseminating the Depths"} toggleMain={toggleMenu}>
              <ul>
                <li>
                  <Link to="/disseminating_the_depths/artist_at_sea">
                    Artist-at-Sea
                  </Link>
                </li>
                <li>
                  <Link to="/disseminating_the_depths/community_building">
                    Community Building
                  </Link>
                </li>
                <li>
                  <Link to="/disseminating_the_depths/divestreams_and_connections">
                    Divestreams and Connections
                  </Link>
                </li>
                <li>
                  <Link to="/disseminating_the_depths/press_and_footage">
                    Press and Footage
                  </Link>
                </li>
                <li>
                  <Link to="/disseminating_the_depths/on_the_big_screen">
                    On the Big Screen
                  </Link>
                </li>
              </ul>
            </SubMenu>
          </li>
        </ul>
      </div>
    </NavMenuContainer>
  );
}

export default NavMenu;
