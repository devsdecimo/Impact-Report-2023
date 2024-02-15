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
            }, 2600);
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
      <img
        src="/assets/images/by_the_numbers/shared/CircleImage.webp"
        className="circle circle-image"
      />
      <div className="circle circle-darkblue"></div>
      <div className="circle circle-lightblue"></div>
      <div className="circle circle-lighterblue"></div>

      <p className="text text-shared">Shared</p>
      <p className="text text-science">Science accomplishments</p>
      <p className="text text-through">through</p>
      <p className="text text-publications">scientific publications</p>
      <p className="text text-ampersand">&</p>
      <p className="text text-more">more than</p>
      <p className="text text-articles">articles</p>
      <p className="numbers-publications numbers">
        <Counter condition={countersStart}>27</Counter>
      </p>
      <p className="numbers-articles numbers">
        <Counter condition={countersStart}>4000</Counter>
      </p>
    </SharedDataContainer>
  );
}

export default SharedData;
