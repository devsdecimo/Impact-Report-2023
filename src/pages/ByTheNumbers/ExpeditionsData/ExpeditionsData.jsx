import React, { useRef, useEffect } from "react";
import { ExpeditionsDataContainer } from "./ExpeditionsData.styles";
import CountUp, { useCountUp } from "react-countup";

function ExpeditionsData() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
          } else {
            entry.target.classList.remove("animated");
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
    delay: 4.5,
  });

  useCountUp({
    ref: "counter-days",
    end: 223,
    enableScrollSpy: true,
    delay: 4.5,
  });


  return (
    <ExpeditionsDataContainer ref={ref}>
      <img
        src="/assets/images/by_the_numbers/expeditions/CircleGray.webp"
        className="circle-gray"
      />
      <img
        src="/assets/images/by_the_numbers/expeditions/CircleImage.webp"
        className="circle-image"
      />
      <img
        src="/assets/images/by_the_numbers/expeditions/CircleBlue.webp"
        className="circle-blue"
      />
      <p className="numbers-expeditions numbers">
        <span id="counter-expeditions" />
      </p>
      <img
        src="/assets/images/by_the_numbers/expeditions/CircleDarkBlue.webp"
        className="circle-darkblue"
      />
      <p className="numbers-days numbers"><span id="counter-days" /></p>
      <p className="text text-expeditions">Expeditions</p>
      <p className="text text-days">days of science</p>
    </ExpeditionsDataContainer>
  );
}

export default ExpeditionsData;
