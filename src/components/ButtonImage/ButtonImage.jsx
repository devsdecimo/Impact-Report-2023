import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonImageContainer } from "./ButtonImage.styles.jsx";
import Tippy from "@tippyjs/react";

function ButtonImage({ className, src, href, delay, tooltip }) {
  const [clickCount, setClickCount] = useState(0);
  const [pageOpening, setPageOpening] = useState(false);
  const buttonRef = useRef(null);
  let navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event) {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setClickCount(0);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [buttonRef]);

  const openPage = () => {
    if (window.innerWidth > 768 || clickCount >= 1) {
      if(href){
        setPageOpening(true);
      }
      setTimeout(() => {
        navigate(href ? href : "#");
      }, 1000);
    } else {
      setClickCount(clickCount + 1);
    }
    setTimeout(() => {
      setClickCount(0);
    }, 3000);
  };

  return (
    <ButtonImageContainer className={className}>
      <Tippy
        className="buttonimage_tooltip"
        content={<span>{`${tooltip ? tooltip : ""}`}</span>}
      >
        <button ref={buttonRef} href={href} delay={delay} onClick={openPage}>
          <img src={src} alt="" />
        </button>
      </Tippy>
      <div className={`open_animation ${pageOpening ? "open" : ""}`}></div>
    </ButtonImageContainer>
  );
}

export default ButtonImage;
