import React, { useRef, useEffect, useState } from "react";
import { ExpeditionsDataContainer } from "./ExpeditionsData.styles";
import Counter from "../../../components/Counter/Counter";

function ExpeditionsData() {
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
      <div className="circle circle-gray"></div>
      <img
        src="/assets/images/by_the_numbers/expeditions/CircleImage.webp"
        className="circle circle-image"
      />
      <div className="circle circle-blue"></div>
      <div className="numbers-expeditions numbers">
        <Counter condition={countersStart}>9</Counter>
      </div>
      <div className="circle circle-darkblue"></div>
      <p className="numbers-days numbers">
        <Counter condition={countersStart}>223</Counter>
      </p>
      <p className="text text-expeditions">Expeditions</p>
      <p className="text text-days">days of science</p>
    </ExpeditionsDataContainer>
  );
}

export default ExpeditionsData;
