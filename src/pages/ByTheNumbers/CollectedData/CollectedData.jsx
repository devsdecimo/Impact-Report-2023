import React, { useRef, useEffect } from "react";
import { CollectedDataContainer } from "./CollectedData.styles";
import { useCountUp } from "react-countup";

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

  useCountUp({
    ref: "counter-samples",
    start: 0,
    end: 2.862,
    enableScrollSpy: true,
    delay: 3.25,
    decimals: 3,
    decimal:",",
  });

  useCountUp({
    ref: "counter-terabytes",
    start: 0,
    end: 269,
    enableScrollSpy: true,
    delay: 3.25,
  });

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
        <span id="counter-samples" />
      </p>
      <p className="numbers-terabytes numbers">
        <span id="counter-terabytes" />
      </p>
      <p className="numbers-artists numbers">
        <span id="counter-artists" />
      </p>
    </CollectedDataContainer>
  );
}

export default CollectedData;
