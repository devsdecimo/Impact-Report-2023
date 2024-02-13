import React, { useState, useEffect, useRef } from "react";

function Counter({
  children,
  id,
  className,
  toFixed = 0,
  delay = 0,
  backwards = false,
}) {
  const wasRunRef = useRef(false);
  const [counter, setCounter] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(Number(children));
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

  const animateCounter = (targetNumber) => {
    if (!wasRunRef.current) {
      wasRunRef.current = true;
      let start = 0;
      const wait = new Promise((res, rej) => {
        setTimeout(() => {
          res();
        }, delay * 1000);
      });
      wait.then(() => {
        const interval = setInterval(() => {
          start += targetNumber / 100;
          setCounter(start);
          if (start >= targetNumber) {
            clearInterval(interval);
            setCounter(targetNumber);
          }
        }, 10);
      });
    }
  };

  return (
    <span
      ref={ref}
      className={className}
      id={id}
      style={{ display: "inline-block" }}
    >
      {counter.toFixed(toFixed).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
    </span>
  );
}

export default Counter;
