import React, { useRef, useEffect } from "react";
import { ReachedDataContainer } from "./ReachedData.styles";
import Counter from "../../../components/Counter/Counter";

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
        <Counter delay={2.75}>8600</Counter>
      </p>
      <p className="numbers-social numbers">
      <Counter delay={2.75}>12</Counter>,<Counter delay={2.75}>5</Counter> <span className="million">million</span>
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
