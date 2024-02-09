import React, { useRef, useEffect } from "react";
import { ExpeditionsDataContainer } from "./ExpeditionsData.styles";
import Counter from "../../../components/Counter/Counter";

function ExpeditionsData() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
          } else {
            if (entry.target.classList.contains("animated")) {
              // entry.target.classList.remove("animated");
            }
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
        <Counter delay={2.25}>9</Counter>
      </p>
      <img
        src="/assets/images/by_the_numbers/expeditions/CircleDarkBlue.webp"
        className="circle-darkblue"
      />
      <p className="numbers-days numbers">
        <Counter delay={2.25}>223</Counter>
      </p>
      <p className="text text-expeditions">Expeditions</p>
      <p className="text text-days">days of science</p>
    </ExpeditionsDataContainer>
  );
}

export default ExpeditionsData;
