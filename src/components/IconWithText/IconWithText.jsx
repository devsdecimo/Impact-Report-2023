import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconWithTextContainer } from './IconWithText.styles.jsx';

function IconWithText({ className, icon, numbers, text, alt = "", toFixed = 0, opacity = 1, href }) {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(0);
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
      {numbers && (
        <span><strong>{counter.toFixed(toFixed).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</strong> {text}</span>
      )}
      {!numbers && <span>{text}</span>}
    </IconWithTextContainer>
  );
}

export default IconWithText;
