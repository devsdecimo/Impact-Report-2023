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
            }, 1600);
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
      <span className="numbers-people numbers">
        <Counter condition={countersStart}>8600</Counter>
      </span>
      <span className="numbers-social numbers">
        <Counter condition={countersStart} className={"counter"}>
          33
        </Counter>{" "}
        <span className="million"> million</span>
      </span>
      <span className="text text-reached">Reached</span>
      <span className="text text-people">
        people via in-person presentations & Ship-to-Shore Connections{" "}
        <br className="desktop" /> in English, Spanish, Dutch, German, and
        Japanese
      </span>
      <span className="text text-and-more">and more than</span>
      <span className="text text-social">
        on Facebook <br className="desktop" /> X, Youtube,{" "}
        <br className="desktop" />& Instagram
      </span>
    </ReachedDataContainer>
  );
}

export default ReachedData;
