import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonImageContainer } from "./ButtonImage.styles.jsx";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

function ButtonImage({
  className,
  src,
  href,
  delay,
  tooltip,
  tooltipPlace,
  tooltipOffset,
}) {
  const [pageOpening, setPageOpening] = useState(false);
  const buttonRef = useRef(null);
  let navigate = useNavigate();

  const [visible, setVisible] = useState(false);
  const show = () => {
    if(window.innerWidth >= 830){
      setVisible(true)
    }
  };
  const hide = () => setVisible(false);

  const openPage = () => {
    if (href) {
      setPageOpening(true);
    }
    setTimeout(() => {
      navigate(href ? href : "#");
    }, 1300);
  };

  const handleClick = () => {
    setVisible(false);
    openPage();
  };

  return (
    <ButtonImageContainer className={className} delay={delay}>
      <Tippy
        className="buttonimage_tooltip"
        content={<span>{`${tooltip ? tooltip : ""}`}</span>}
        theme={"soi"}
        duration={700}
        arrow={false}
        visible={visible}
        placement={tooltipPlace}
        offset={tooltipOffset ? tooltipOffset : 0}
      >
        <button
          ref={buttonRef}
          href={href}
          onClick={handleClick}
          onMouseEnter={show}
          onMouseLeave={hide}
        >
          <img src={src} alt="" />
        </button>
      </Tippy>
      <a onClick={handleClick} className="expedition_tag_mobile">
        {tooltip}
      </a>
      <div className={`open_animation ${pageOpening ? "open" : ""}`}></div>
    </ButtonImageContainer>
  );
}

export default ButtonImage;
