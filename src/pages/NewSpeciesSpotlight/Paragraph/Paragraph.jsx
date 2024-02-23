import React from "react";
import { ParagraphContainer } from "./Paragraph.styles";


function Paragraph({title, subtitle, text, italicWords, namedBy, vessel, vesselAfterText, photo}) {


  function resaltarPalabras(texto, palabras) {
    // Usamos una expresión regular para buscar todas las palabras en el texto
    const regex = new RegExp(`\\b(${palabras.join('|')})\\b`, 'gi');
    palabras = palabras.map(palabra => palabra.toLowerCase());
    // Dividimos el texto en partes usando la expresión regular
    const partes = texto.split(regex);
  
    // Creamos un array para almacenar las partes y resaltamos las palabras coincidentes
    const elementosResaltados = partes.map((parte, index) => {
      if (palabras.includes(parte.toLowerCase())) {
        return <span key={index} className="italic">{parte}</span>;
      }
      return parte;
    });
  
    return elementosResaltados;
  }


  return (
    <ParagraphContainer>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p className="text">{italicWords && italicWords.length>0 ? resaltarPalabras(text, italicWords) : text}</p>
        <p>{title=='Pyrolycus jaco'?'Feature named by: '+namedBy:'Species named by: '+namedBy}</p>
        <p>Vessel discovered on: R/V  
          <span className="italic ml-10">{vessel}</span>
          <br/>
          <span className="italic">{vesselAfterText&&vesselAfterText}</span>
        </p>
        <p>Photo credit: {photo}</p>
    </ParagraphContainer>
    
  );
}

export default Paragraph;