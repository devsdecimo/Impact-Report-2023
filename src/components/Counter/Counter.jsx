import React, { useState, useEffect, useRef } from "react";

function Counter({
  children,
  id,
  className,
  toFixed = 0,
  delay = 0,
  condition,
  separator=true
}) {
  const wasRunRef = useRef(false);
  const [counter, setCounter] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (typeof condition !== "boolean") {
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
    } else if (condition) {
      animateCounter(Number(children));
    }
  }, [condition]);

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
      {separator? counter.toFixed(toFixed).replace(/\B(?=(\d{3})+(?!\d))/g, ","): counter.toFixed(toFixed)}
    </span>
  );
}

export default Counter;
