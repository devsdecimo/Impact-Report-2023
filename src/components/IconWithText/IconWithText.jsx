import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconWithTextContainer } from './IconWithText.styles.jsx';

function IconWithText({ className, icon, numbers, text, alt = "", toFixed = 0, opacity = 1, href, textBefore, numbers2, separator }) {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const containerRef = useRef(null);

  const animateCounter = (targetNumber) => {
    let start = 0;
    const interval = setInterval(() => {
      start += targetNumber / 100;
      setCounter(start);
      if (start >= targetNumber) {
        clearInterval(interval);
        setCounter(targetNumber);
      }
    }, 10);
  };
  const animateCounter2 = (targetNumber) => {
    let start = 0;
    const interval = setInterval(() => {
      start += targetNumber / 100;
      setCounter2(start);
      if (start >= targetNumber) {
        clearInterval(interval);
        setCounter2(targetNumber);
      }
    }, 10);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounter(parseFloat(numbers));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [numbers]);

  useEffect(() => {
    const observer2 = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounter2(parseFloat(numbers2));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer2.observe(containerRef.current);
    }

    return () => {
      observer2.disconnect();
    };
  }, [numbers2]);

  const openPage = () => {
    if (href) {
      setTimeout(() => {
        navigate(href);
      }, 300);
    }
  };

  const handleClick = href ? openPage : null;

  return (
    <IconWithTextContainer ref={containerRef} className={className} onClick={handleClick} style={{ opacity }}>
      
      <img src={icon} alt={alt} />
      {textBefore &&
        <span className="ml-10 text-before"><strong>{textBefore}</strong></span>
      }
      {numbers && textBefore=='Year discovered: '?
      <span className={textBefore && textBefore !== '~'?"ml-10":"ml-10 text-bold"}>{counter.toFixed(toFixed)}</span>:numbers &&
      <span className={textBefore && textBefore !== '~'?"ml-10":"ml-10 text-bold"}>{counter.toFixed(toFixed).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>}
      {separator && 
      <span className={textBefore?'':'text-bold'}>{separator}</span>}
      {numbers2 && textBefore=='Year discovered: '?
      <span className={textBefore?'':'text-bold'}>{counter2.toFixed(toFixed)}</span>:numbers2 &&
      <span className={textBefore?'':'text-bold'}>{counter2.toFixed(toFixed).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
      }
      {text  && 
      <span className="ml-10">{text}</span>}
    </IconWithTextContainer>
  );
}

export default IconWithText;
