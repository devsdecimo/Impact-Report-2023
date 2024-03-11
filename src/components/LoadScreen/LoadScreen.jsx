import React, { useState } from "react";
import { LoadContainer } from "./LoadScreen.styles";

function LoadScreen() {
  return (
    <LoadContainer>
        <img src="/assets/images/Title.svg" alt="" />
      <div className="loader"></div>
    </LoadContainer>
  );
}

export default LoadScreen;
