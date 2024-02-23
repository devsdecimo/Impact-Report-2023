import React, { useRef, useEffect, useState } from "react";
import { HostedDataContainer } from "./HostedData.styles";
import Counter from "../../../components/Counter/Counter";

function HostedData() {
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
    <HostedDataContainer ref={ref}>
     
      <div className="circle circle-blue"></div>
      <div className="circle circle-lightblue"></div>
      <div className="circle circle-darkblue"></div>
      <div className="circle circle-mediumblue"></div>
      <img
        src="/assets/images/by_the_numbers/hosted/CircleImage.webp"
        className="circle circle-image"
      />

      <img
        src="/assets/images/by_the_numbers/hosted/Image.webp"
        className="image"
      />

      <span className="numbers-expeditions numbers">
        <span id="counter-expeditions" />
      </span>

      <span className="text text-hosted">Hosted</span>
      <span className="text text-scientists">scientists</span>
      <span className="text text-students">students</span>
      <span className="text text-artists">artists</span>
      <span className="text text-ampersand">&</span>
      <span className="text text-berths">berths of opportunity</span>
      <span className="numbers-scientists numbers">
        <Counter condition={countersStart}>84</Counter>
      </span>
      <span className="numbers-students numbers">
        <Counter condition={countersStart}>56</Counter>
      </span>
      <span className="numbers-artists numbers">
        <Counter condition={countersStart}>12</Counter>
      </span>
    </HostedDataContainer>
  );
}

export default HostedData;
