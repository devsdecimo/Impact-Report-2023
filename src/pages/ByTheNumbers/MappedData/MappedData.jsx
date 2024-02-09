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
        src="/assets/images/by_the_numbers/mapped/CircleImage1.webp"
        className="circle-image1"
      />

      <img
        src="/assets/images/by_the_numbers/mapped/CircleLightblue.webp"
        className="circle-lightblue"
      />

      <img
        src="/assets/images/by_the_numbers/mapped/CircleImage2.webp"
        className="circle-image2"
      />
      <img
        src="/assets/images/by_the_numbers/expeditions/CircleDarkBlue.webp"
        className="circle-darkblue"
      />
      <p className="numbers-discovering numbers">
        <Counter delay={2.75}>5</Counter>
      </p>
      <p className="text text-mapped">Mapped</p>
      <p className="text text-km2"><Counter delay={3}>190025</Counter>.<Counter delay={2.75}>60</Counter> km²</p>
      <p className="text text-seafloor">of seafloor</p>
      <p className="text text-discovering">Discovering</p>
      <p className="text text-underwater">underwater features</p>
    </MappedDataContainer>
  );
}

export default MappedData;
