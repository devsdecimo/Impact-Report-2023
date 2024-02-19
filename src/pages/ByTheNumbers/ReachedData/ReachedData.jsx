import React, { useRef, useEffect, useState } from "react";
import { ReachedDataContainer } from "./ReachedData.styles";
import Counter from "../../../components/Counter/Counter";

function ReachedData() {
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
      <div className="circle circle-gray"></div>
      <div className="circle circle-lighterblue"></div>
      <div className="circle circle-darkblue"></div>
      <div className="circle circle-lightblue"></div>
      <img
        src="/assets/images/by_the_numbers/reached/Image.webp"
        className="image"
      />
      <p className="numbers-people numbers">
        <Counter condition={countersStart}>8600</Counter>
      </p>
      <p className="numbers-social numbers">
        <Counter condition={countersStart}>33</Counter>,<Counter condition={countersStart}>3</Counter>{" "}
        <span className="million">million</span>
      </p>
      <p className="text text-reached">Reached</p>
      <p className="text text-people">
        people via presentations & Ship-to-Shores <br className="desktop"/> in both English and
        Spanish
      </p>
      <p className="text text-and-more">
        and <br className="desktop"/> more <br className="desktop"/> than
      </p>
      <p className="text text-social">
        on Facebook <br className="desktop"/> Twitter, <br className="desktop"/> Youtube, <br className="desktop"/>& Instagram
      </p>
    </ReachedDataContainer>
  );
}

export default ReachedData;
