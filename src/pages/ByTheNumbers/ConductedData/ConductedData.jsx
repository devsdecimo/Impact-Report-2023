import React, { useRef, useEffect, useState } from "react";
import { ConductedDataContainer } from "./ConductedData.styles";
import Counter from "../../../components/Counter/Counter";

function ConductedData() {
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
    <ConductedDataContainer ref={ref}>
      <div className="circle circle-lighterblue"></div>
      <div className="circle circle-bg"></div>
      <div className="circle circle-blue"></div>
      <div className="circle circle circle-lightblue"></div>
      <img
        src="/assets/images/by_the_numbers/conducted/Image.webp"
        className="image"
      />
      <div className="circle circle-darkblue"></div>

      <span className="text text-conducted">Conducted</span>
      <span className="text text-ctd">CTD casts</span>
      <span className="text text-ampersand">&</span>
      <span className="text text-underwater">
        underwater <br className="mobile"/> dives with ROV <br className="mobile"/><i>SuBastian</i>
      </span>
      <span className="text text-totaling">Totaling</span>
      <span className="text text-hours-desktop">hours of deep-sea exploration</span>
      <span className="text text-hours">Total hours of deep-sea exploration</span>

      <span className="numbers-ctd numbers">
        <Counter condition={countersStart}>213</Counter>
      </span>

      <span className="numbers-underwater numbers">
        <Counter condition={countersStart}>143</Counter>
      </span>

      <span className="numbers-hours numbers">
        <span id="counter-hours" />
        <Counter condition={countersStart}>2053</Counter>
      </span>
    </ConductedDataContainer>
  );
}

export default ConductedData;
