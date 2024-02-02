import React, { useRef, useEffect } from "react";
import { TraveledDataContainer } from "./TraveledData.styles";
import { useCountUp } from "react-countup";

function TraveledData() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
          } else {
            // entry.target.classList.remove("animated");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useCountUp({
    ref: "counter-countries",
    start: 0,
    end: 4,
    enableScrollSpy: true,
    delay: 3,
  });

  useCountUp({
    ref: "counter-us",
    start: 9,
    end: 1,
    enableScrollSpy: true,
    delay: 3,
  });

  return (
    <TraveledDataContainer ref={ref}>
      <img
        src="/assets/images/by_the_numbers/traveled/CircleLightblue.webp"
        className="circle-lightblue"
      />
      <img
        src="/assets/images/by_the_numbers/traveled/CircleBlue.webp"
        className="circle-blue"
      />
      <p className="numbers-expeditions numbers">
        <span id="counter-expeditions" />
      </p>
      <img
        src="/assets/images/by_the_numbers/traveled/CircleDarkblue.webp"
        className="circle-darkblue"
      />

      <img
        src="/assets/images/by_the_numbers/traveled/Ship.webp"
        className="ship"
      />
     
      <p className="text text-traveled">Traveled</p>
      <p className="text text-km">27,276 km</p>
      <p className="text text-visiting">visiting</p>
      <p className="text text-countries">countries</p>
      <p className="text text-ampersand">&</p>
      <p className="text text-us">
        unincorporated <br /> U.S. territory
      </p>
      <p className="numbers-countries numbers">
        <span id="counter-countries" />
      </p>
      <p className="numbers-us numbers">
        <span id="counter-us" />
      </p>
      <div className="country country-spain">
        <img src="/assets/images/by_the_numbers/traveled/Spain.webp" alt="" />
        <p>Spain</p>
      </div>
      <div className="country country-puertorico">
        <img src="/assets/images/by_the_numbers/traveled/PuertoRico.webp" alt="" />
        <p>Puerto Rico</p>
      </div>
      <div className="country country-panama">
        <img src="/assets/images/by_the_numbers/traveled/Panama.webp" alt="" />
        <p>Panama</p>
      </div>
      <div className="country country-costarica">
        <img src="/assets/images/by_the_numbers/traveled/CostaRica.webp" alt="" />
        <p>Costa Rica</p>
      </div>
      <div className="country country-ecuador">
        <img src="/assets/images/by_the_numbers/traveled/Ecuador.webp" alt="" />
        <p>Ecuador</p>
      </div>
    </TraveledDataContainer>
  );
}

export default TraveledData;
