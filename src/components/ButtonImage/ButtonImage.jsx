import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { ButtonImageContainer } from "./ButtonImage.styles.jsx";

function ButtonImage({ className, src, href, delay }) {
  const [pageOpening, setPageOpening] = useState(false);
  const buttonRef = useRef(null);
  let navigate = useNavigate();

  const openPage = () => {
    setPageOpening(true);
    setTimeout(() => {
      navigate('/about');
    }, 1000);
  };

  return (
    <ButtonImageContainer className={className}>
      <button ref={buttonRef} href={href} delay={delay} onClick={openPage}>
        <img src={src} alt="" />
      </button>
      <div className={`open_animation ${pageOpening ? "open" : ""}`}></div>
    </ButtonImageContainer>
  );
}

export default ButtonImage;
