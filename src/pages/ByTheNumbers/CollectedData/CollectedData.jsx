import React, { useRef, useEffect } from "react";
import { CollectedDataContainer } from "./CollectedData.styles";
import Counter from "../../../components/Counter/Counter";

function CollectedData() {
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
    <CollectedDataContainer ref={ref}>
      <img
        src="/assets/images/by_the_numbers/collected/CircleGray.webp"
        className="circle-gray"
      />
      
      <img
        src="/assets/images/by_the_numbers/collected/CircleImage.webp"
        className="circle-image"
      />


      <img
        src="/assets/images/by_the_numbers/collected/CircleLightblue.webp"
        className="circle-lightblue"
      />

      <img
        src="/assets/images/by_the_numbers/collected/CircleDarkblue.webp"
        className="circle-darkblue"
      />


      <p className="numbers-expeditions numbers">
        <span id="counter-expeditions" />
      </p>

      <p className="text text-collected">Collected</p>
      <p className="text text-samples">samples and</p>
      <p className="text text-ampersand">&</p>
      <p className="text text-terabytes">Terabytes of data to advance <br/>scientific understanding of the <br/>Ocean and ocean processes</p>
      <p className="numbers-samples numbers">
        <Counter delay={3.25}>2826</Counter>
      </p>
      <p className="numbers-terabytes numbers">
        <Counter delay={3.25}>269</Counter>
      </p>
    </CollectedDataContainer>
  );
}

export default CollectedData;
