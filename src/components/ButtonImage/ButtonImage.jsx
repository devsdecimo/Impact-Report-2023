import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonImageContainer } from "./ButtonImage.styles.jsx";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

function ButtonImage({ className, src, href, delay, tooltipTheme, tooltip, tooltipPlace }) {
  const [pageOpening, setPageOpening] = useState(false);
  const buttonRef = useRef(null);
  let navigate = useNavigate();

  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);

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
    if (href) {
      setPageOpening(true);
    }
    setTimeout(() => {
      navigate(href ? href : "#");
    }, 1300);
  };

  return (
    <ButtonImageContainer className={className}>
      <Tippy
        className="buttonimage_tooltip"
        content={<span>{`${tooltip ? tooltip : ""}`}</span>}
        theme={"soi"}
        duration={700}
        arrow={false}
        visible={visible}
        placement={tooltipPlace}
      >
        <button
          ref={buttonRef}
          href={href}
          delay={delay}
          onClick={() => {
            hide();
            openPage();
          }}
          onMouseEnter={show}
          onMouseLeave={hide}
        >
          <img src={src} alt="" />
        </button>
      </Tippy>
      <div className={`open_animation ${pageOpening ? "open" : ""}`}></div>
    </ButtonImageContainer>
  );
}

export default ButtonImage;
