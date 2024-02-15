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
            }, 3000);
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
      <div className="circle circle-overbg"></div>
      <div className="circle circle-bg"></div>
      <div className="circle circle-blue"></div>
      <div className="circle circle circle-lightblue"></div>
      <img
        src="/assets/images/by_the_numbers/conducted/Image.webp"
        className="image"
      />
      <div className="circle circle-over"></div>
      <div className="circle circle-darkblue"></div>

      <p className="text text-conducted">Conducted</p>
      <p className="text text-ctd">CTD casts</p>
      <p className="text text-ampersand">&</p>
      <p className="text text-underwater">
        underwater dives with ROV <i>SuBastian</i>
      </p>
      <p className="text text-totaling">Totaling</p>
      <p className="text text-hours">hours of deep-sea exploration</p>

      <p className="numbers-ctd numbers">
        <Counter condition={countersStart}>213</Counter>
      </p>

      <p className="numbers-underwater numbers">
        <Counter condition={countersStart}>143</Counter>
      </p>

      <p className="numbers-hours numbers">
        <span id="counter-hours" />
        <Counter condition={countersStart}>2053</Counter>
      </p>
    </ConductedDataContainer>
  );
}

export default ConductedData;
