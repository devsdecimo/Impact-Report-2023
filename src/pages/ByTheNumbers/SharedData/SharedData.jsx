import React, { useRef, useEffect, useState } from "react";
import { SharedDataContainer } from "./SharedData.styles";
import Counter from "../../../components/Counter/Counter";

function SharedData() {
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
    <SharedDataContainer ref={ref}>
      <div className="circle circle-blue"></div>
      <div className="circle circle-lighterblue"></div>
      <img
        src="/assets/images/by_the_numbers/shared/CircleImage.webp"
        className="circle circle-image"
      />
      <div className="circle circle-darkblue"></div>
      <div className="circle circle-lightblue"></div>

      <span className="text text-shared">Shared</span>
      <span className="text text-science">Science accomplishments</span>
      <span className="text text-through">through</span>
      <span className="text text-publications">scientific publications</span>
      <span className="text text-ampersand">&</span>
      <span className="text text-more">more than</span>
      <span className="text text-articles">press articles</span>
      <span className="numbers-publications numbers">
        <Counter condition={countersStart}>27</Counter>
      </span>
      <span className="numbers-articles numbers">
        <Counter condition={countersStart} className={'counter'}>4000</Counter>
      </span>
    </SharedDataContainer>
  );
}

export default SharedData;
