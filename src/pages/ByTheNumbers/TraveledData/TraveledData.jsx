import React, { useRef, useEffect } from "react";
import { TraveledDataContainer } from "./TraveledData.styles";
import CountUp, { useCountUp } from "react-countup";

function TraveledData() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // entry.target.classList.add("animated");
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
    ref: "counter-expeditions",
    end: 9,
    enableScrollSpy: true,
    delay: 2.5,
  });

  useCountUp({
    ref: "counter-days",
    start: 0,
    end: 223,
    enableScrollSpy: true,
    delay: 2.5,
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
      <p className="numbers-days numbers"><span id="counter-days" /></p>
      <p className="text text-traveled">Traveled</p>
      <p className="text text-days">visiting</p>
      <p className="text text-days">countries</p>
      <p className="text text-days">&</p>
      <p className="text text-days">unincorporated <br/> U.S. territory</p>
    </TraveledDataContainer>
  );
}

export default TraveledData;
