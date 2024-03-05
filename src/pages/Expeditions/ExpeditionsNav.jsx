import React from "react";
import CarouselNav from "../../components/CarouselNav/CarouselNav";


function ExpeditionsNav() {

  const navSlides = [
    {
      img: "/assets/images/home/expedition_1.webp",
      href: "/expeditions/in_search_of_hydrothermal_lost_cities",
      text: "In Search of Hydrothermal Lost Cities",
    },
    {
      img: "/assets/images/home/expedition_2.webp",
      href: "/expeditions/health_diagnosis_of_deep_sea_coral",
      text: "Health Diagnosis of Deep Sea Coral",
    },
    {
      img: "/assets/images/home/expedition_3.webp",
      href: "/expeditions/octopus_odyssey",
      text: "Octopus Odyssey/ Octopus Odyssey (too)",
    },
    {
      img: "/assets/images/home/expedition_4.webp",
      href: "/expeditions/the_underworld_of_hydrothermal_vents",
      text: "The Underworld of Hydrothermal Vents",
    },
    {
      img: "/assets/images/home/expedition_5.webp",
      href: "/expeditions/dynamics_of_sinking_microplastics",
      text: "Dynamics of Sinking Microplastics",
    },
    {
      img: "/assets/images/home/expedition_6.webp",
      href: "/expeditions/hydrothermal_vents_of_the_galapagos",
      text: "Hydrothermal Vents of the Western Galápagos",
    },
    {
      img: "/assets/images/home/expedition_7.webp",
      href: "/expeditions/vertical_reefs_of_the_galapagos",
      text: "Vertical Reefs of the Galápagos",
    },
    {
        img: "/assets/images/home/expedition_8.webp",
        href: "/expeditions/ultra_fine_scale_seafloor_mapping",
        text: "Ultra Fine-Scale Seafloor Mapping",
      },
  ];

  return <CarouselNav slides={navSlides} />;
}

export default ExpeditionsNav;
