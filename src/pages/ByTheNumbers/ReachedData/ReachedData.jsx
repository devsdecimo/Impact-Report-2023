import React, { useRef, useEffect } from "react";
import { ReachedDataContainer } from "./ReachedData.styles";
import { useCountUp } from "react-countup";

function ReachedData() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
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

  useCountUp({
    ref: "counter-people",
    end: 8.6,
    decimal: ",",
    decimals: 3,
    enableScrollSpy: true,
    delay: 3.25,
  });

  useCountUp({
    ref: "counter-social",
    start: 0,
    end: 12.5,
    decimal: ",",
    decimals: 1,
    enableScrollSpy: true,
    delay: 3.25,
  });

  return (
    <ReachedDataContainer ref={ref}>
      <img
        src="/assets/images/by_the_numbers/reached/CircleGray.webp"
        className="circle-gray"
      />
      <img
        src="/assets/images/by_the_numbers/reached/CircleLighterblue.webp"
        className="circle-lighterblue"
      />
      <img
        src="/assets/images/by_the_numbers/reached/CircleDarkblue.webp"
        className="circle-darkblue"
      />
      <img
        src="/assets/images/by_the_numbers/reached/CircleLightblue.webp"
        className="circle-lightblue"
      />
      <img
        src="/assets/images/by_the_numbers/reached/Image.webp"
        className="image"
      />
      <p className="numbers-people numbers">
        <span id="counter-people" />
      </p>
      <p className="numbers-social numbers">
        <span id="counter-social" /> <span className="million">million</span>
      </p>
      <p className="text text-reached">Reached</p>
      <p className="text text-people">
        people via presentations & Ship-to-Shores <br /> in both English and
        Spanish
      </p>
      <p className="text text-and-more">
        and <br /> more <br /> than
      </p>
      <p className="text text-social">
        on Facebook <br /> Twitter, <br /> Youtube, <br />& Instagram
      </p>
    </ReachedDataContainer>
  );
}

export default ReachedData;
