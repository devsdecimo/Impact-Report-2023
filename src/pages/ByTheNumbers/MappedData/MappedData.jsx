import React, { useRef, useEffect } from "react";
import { MappedDataContainer } from "./MappedData.styles";
import { useCountUp } from "react-countup";

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

  useCountUp({
    ref: "counter-discovering",
    end: 5,
    enableScrollSpy: true,
    delay: 3,
  });

  useCountUp({
    ref: "counter-days",
    start: 0,
    end: 223,
    enableScrollSpy: true,
    delay: 2.25,
  });

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
        <span id="counter-discovering" />
      </p>
      <p className="text text-mapped">Mapped</p>
      <p className="text text-km2">190,025.60 km²</p>
      <p className="text text-seafloor">of seafloor</p>
      <p className="text text-discovering">Discovering</p>
      <p className="text text-underwater">underwater features</p>
    </MappedDataContainer>
  );
}

export default MappedData;
