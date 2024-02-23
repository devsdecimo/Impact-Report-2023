import React, { useRef, useEffect, useState } from "react";
import { CollectedDataContainer } from "./CollectedData.styles";
import Counter from "../../../components/Counter/Counter";

function CollectedData() {
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
    <CollectedDataContainer ref={ref}>
      <div className="circle circle-gray"></div>
      <img
        src="/assets/images/by_the_numbers/collected/CircleImage.webp"
        className="circle circle-image"
      />
      <div className="circle circle-lightblue"></div>
      <div className="circle circle-darkblue"></div>

      <span className="numbers-expeditions numbers">
        <span id="counter-expeditions" />
      </span>

      <span className="text text-collected">Collected</span>
      <span className="text text-samples">samples and</span>
      <span className="text text-ampersand">&</span>
      <span className="text text-terabytes">
        Terabytes of data to advance <br className="desktop"/>
        scientific understanding of the <br className="desktop"/>
        Ocean and ocean processes
      </span>
      <span className="numbers-samples numbers">
        <Counter condition={countersStart}>2826</Counter>
      </span>
      <span className="numbers-terabytes numbers">
        <Counter condition={countersStart}>269</Counter>
      </span>
    </CollectedDataContainer>
  );
}

export default CollectedData;
