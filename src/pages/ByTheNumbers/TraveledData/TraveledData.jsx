import React, { useRef, useEffect, useState } from "react";
import { TraveledDataContainer } from "./TraveledData.styles";
import Counter from "../../../components/Counter/Counter";

function TraveledData() {
  const ref = useRef(null);
  const [countersStart, setCountersStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
            setTimeout(() => {
              setCountersStart(true);
            }, 1600);
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

  return (
    <TraveledDataContainer ref={ref}>
      <div className="circle circle-lightblue"></div>
      <div className="circle circle-blue"></div>
      <div className="circle circle-darkblue"></div>
      <img
        src="/assets/images/by_the_numbers/traveled/Ship.webp"
        className="ship"
      />

      <p className="text text-traveled">Traveled</p>
      <p className="text text-km">
        <Counter condition={countersStart}>39280</Counter> km
      </p>
      <p className="text text-visiting">visiting</p>
      <p className="text text-countries">countries</p>
      <p className="text text-ampersand">&</p>
      <p className="text text-us">
        unincorporated <br /> U.S. territory
      </p>
      <p className="numbers-countries numbers">
        <Counter condition={countersStart}>4</Counter>
      </p>
      <p className="numbers-us numbers">
        <Counter condition={countersStart}>1</Counter>
      </p>
      <div className="country country-spain">
        <img src="/assets/images/by_the_numbers/traveled/Spain.webp" alt="" />
        <p>Spain</p>
      </div>
      <div className="country country-puertorico">
        <img
          src="/assets/images/by_the_numbers/traveled/PuertoRico.webp"
          alt=""
        />
        <img
          src="/assets/images/by_the_numbers/traveled/US.webp"
          className="us-extra"
        />
        <p>Puerto Rico</p>
      </div>
      <div className="country country-panama">
        <img src="/assets/images/by_the_numbers/traveled/Panama.webp" alt="" />
        <p>Panama</p>
      </div>
      <div className="country country-costarica">
        <img
          src="/assets/images/by_the_numbers/traveled/CostaRica.webp"
          alt=""
        />
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
