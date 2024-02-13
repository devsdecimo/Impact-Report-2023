import React, { useRef, useEffect } from "react";
import { MappedDataContainer } from "./MappedData.styles";
import Counter from "../../../components/Counter/Counter";

function MappedData() {
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

  return (
    <MappedDataContainer ref={ref}>
      <img
        src="/assets/images/by_the_numbers/mapped/CircleLightblue.webp"
        className="circle circle-lighterbluebg"
      />

      <img
        src="/assets/images/by_the_numbers/mapped/CircleImage1.webp"
        className="circle circle-image1"
      />

      <img
        src="/assets/images/by_the_numbers/mapped/CircleLightblue.webp"
        className="circle circle-lighterblue"
      />

      <img
        src="/assets/images/by_the_numbers/mapped/CircleImage2.webp"
        className="circle circle-image2"
      />
      <div className="circle circle-darkblue"></div>
      <div className="circle circle-lightblue"></div>
      <div className="circle circle-blue"></div>
      <p className="text text-mapped">Mapped</p>
      <p className="numbers-including numbers">
        <Counter delay={2.75}>5</Counter>
      </p>
      <p className="text text-km2">
        <Counter delay={3}>190025</Counter>.<Counter delay={2.75}>60</Counter>{" "}
        km²
      </p>
      <p className="numbers-seamount numbers">
        <Counter delay={2.75}>3</Counter>
      </p>
      <p className="numbers-cold numbers">
        <Counter delay={2.75}>2</Counter>
      </p>
      <p className="text text-seafloor">of seafloor</p>
      <p className="text text-including">Including</p>
      <p className="text text-hydrothermal">new hydrothermal vent fields</p>
      <p className="text text-seamounts">seamounts</p>
      <p className="text text-cold">new cold water coral reefs</p>
    </MappedDataContainer>
  );
}

export default MappedData;
