import React, { useRef, useEffect } from "react";
import { HostedDataContainer } from "./HostedData.styles";
import Counter from "../../../components/Counter/Counter";

function HostedData() {
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
    <HostedDataContainer ref={ref}>
      <img
        src="/assets/images/by_the_numbers/hosted/CircleImage.webp"
        className="circle-image"
      />
      <img
        src="/assets/images/by_the_numbers/hosted/CircleBlue.webp"
        className="circle-blue"
      />

      <img
        src="/assets/images/by_the_numbers/hosted/CircleLightblue.webp"
        className="circle-lightblue"
      />

      <img
        src="/assets/images/by_the_numbers/hosted/CircleDarkblue.webp"
        className="circle-darkblue"
      />

      <img
        src="/assets/images/by_the_numbers/hosted/CircleMediumblue.webp"
        className="circle-mediumblue"
      />

      <img
        src="/assets/images/by_the_numbers/hosted/Image.webp"
        className="image"
      />

      <p className="numbers-expeditions numbers">
        <span id="counter-expeditions" />
      </p>

      <p className="text text-hosted">Hosted</p>
      <p className="text text-scientists">scientists</p>
      <p className="text text-students">students</p>
      <p className="text text-artists">artists</p>
      <p className="text text-ampersand">&</p>
      <p className="text text-berths">berths of opportunity</p>
      <p className="numbers-scientists numbers">
        <Counter delay={3.25}>84</Counter>
      </p>
      <p className="numbers-students numbers">
        <Counter delay={3.25}>56</Counter>
      </p>
      <p className="numbers-artists numbers">
        <Counter delay={3.25}>12</Counter>
      </p>
    </HostedDataContainer>
  );
}

export default HostedData;
