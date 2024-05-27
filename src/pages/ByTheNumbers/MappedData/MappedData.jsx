import React, { useRef, useEffect, useState } from "react";
import { MappedDataContainer } from "./MappedData.styles";
import Counter from "../../../components/Counter/Counter";

function MappedData() {
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
    <MappedDataContainer ref={ref}>
      <div className="circle circle-lighterblue"></div>

      <img
        src="/assets/images/by_the_numbers/mapped/CircleImage1.webp"
        className="circle circle-image1"
        alt="Multibeam sonar image of a seamount"
      />


      <img
        src="/assets/images/by_the_numbers/mapped/CircleImage2.webp"
        className="circle circle-image2"
      />
      <div className="circle circle-darkblue"></div>
      <div className="circle circle-lightblue"></div>
      <div className="circle circle-blue"></div>
      <span className="text text-mapped">Mapped</span>
      <span className="numbers-including numbers">
        <Counter condition={countersStart}>5</Counter>
      </span>
      <span className="text text-km2">
        <Counter condition={countersStart}>190025</Counter>{" "}
        km²
      </span>
      <span className="numbers-seamount numbers">
        <Counter condition={countersStart}>7</Counter>
      </span>
      <span className="numbers-cold numbers">
        <Counter condition={countersStart}>2</Counter>
      </span>
      <span className="text text-seafloor">of seafloor</span>
      <span className="text text-including">Discovering</span>
      <span className="text text-hydrothermal">new hydrothermal vent fields</span>
      <span className="text text-seamounts">seamounts</span>
      <span className="text text-cold">new cold-water coral reefs</span>
    </MappedDataContainer>
  );
}

export default MappedData;
