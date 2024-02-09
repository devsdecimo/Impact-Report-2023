import React, { useState, useEffect, useRef } from "react";

function Counter({
  children,
  id,
  className,
  toFixed = 0,
  delay = 0,
  backwards = false,
}) {
  const [counter, setCounter] = useState(0);
  const ref = useRef(null);

  const animateCounter = (targetNumber) => {
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
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
            console.log('counter',counter);
            console.log('child',children);
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

  return (
    <div
      ref={ref}
      className={className}
      id={id}
      style={{ display: "inline-block" }}
    >
      {counter.toFixed(toFixed).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
    </div>
  );
}

export default Counter;
