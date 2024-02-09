import React, { useRef, useEffect } from "react";
import { ConductedDataContainer } from "./ConductedData.styles";
import Counter from "../../../components/Counter/Counter";

function ConductedData() {
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
    <ConductedDataContainer ref={ref}>
      <img
        src="/assets/images/by_the_numbers/conducted/CircleBG.webp"
        className="circle-bg"
      />
      <img
        src="/assets/images/by_the_numbers/conducted/CircleBlue.webp"
        className="circle-blue"
      />
      <img
        src="/assets/images/by_the_numbers/conducted/CircleDarkblue.webp"
        className="circle-darkblue"
      />
      <img
        src="/assets/images/by_the_numbers/conducted/CircleLightblue.webp"
        className="circle-lightblue"
      />
      <img
        src="/assets/images/by_the_numbers/conducted/Image.webp"
        className="image"
      />
      <img
        src="/assets/images/by_the_numbers/conducted/CircleOver.webp"
        className="circle-over"
      />
      <p className="numbers-expeditions numbers">
        <span id="counter-expeditions" />
      </p>
      <img
        src="/assets/images/by_the_numbers/expeditions/CircleDarkBlue.webp"
        className="circle-darkblue"
      />

      <p className="text text-conducted">Conducted</p>
      <p className="text text-ctd">CTD casts</p>
      <p className="text text-ampersand">&</p>
      <p className="text text-underwater">
        underwater dives with ROV SuBastian
      </p>
      <p className="text text-totaling">Totaling</p>
      <p className="text text-hours">hours of deep-sea exploration</p>

      <p className="numbers-ctd numbers">
        <Counter delay={3.25}>213</Counter>
      </p>

      <p className="numbers-underwater numbers">
        <Counter delay={3.25}>143</Counter>
      </p>

      <p className="numbers-hours numbers">
        <span id="counter-hours" />
        <Counter delay={3.25}>2053</Counter>
      </p>
    </ConductedDataContainer>
  );
}

export default ConductedData;
