import React, { useRef, useEffect } from "react";
import { SharedDataContainer } from "./SharedData.styles";
import Counter from "../../../components/Counter/Counter";

function SharedData() {
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
    <SharedDataContainer ref={ref}>
      <img
        src="/assets/images/by_the_numbers/shared/CircleBlue.webp"
        className="circle-blue"
      />

      <img
        src="/assets/images/by_the_numbers/shared/CircleImage.webp"
        className="circle-image"
      />

      <img
        src="/assets/images/by_the_numbers/shared/CircleDarkblue.webp"
        className="circle-darkblue"
      />

      <img
        src="/assets/images/by_the_numbers/shared/CircleLightblue.webp"
        className="circle-lightblue"
      />

      <img
        src="/assets/images/by_the_numbers/shared/CircleLighterblue.webp"
        className="circle-lighterblue"
      />

      <p className="text text-shared">Shared</p>
      <p className="text text-science">Science accomplishments</p>
      <p className="text text-through">through</p>
      <p className="text text-publications">scientific publications</p>
      <p className="text text-ampersand">&</p>
      <p className="text text-more">more than</p>
      <p className="text text-articles">articles</p>
      <p className="numbers-publications numbers">
        <Counter delay={3.25}>27</Counter>
      </p>
      <p className="numbers-articles numbers">
        <Counter delay={3.25}>4000</Counter>
      </p>
    </SharedDataContainer>
  );
}

export default SharedData;
