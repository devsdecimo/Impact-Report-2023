import React from 'react';
import {MapIframeContainer } from './MapIframe.styles';

const MapIframe = ({url, title}) => {

  return (
    
    <MapIframeContainer>
      {title && <h2>{title}</h2>}
      <iframe
        src={url}
      ></iframe>
    </MapIframeContainer>
  );
};

export default MapIframe;