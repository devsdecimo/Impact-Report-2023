import React from "react";
import { SectionContainer } from "./Section.styles";
import IconWithText from "../../../components/IconWithText/IconWithText";
import Depth from "/assets/images/new_species/icons/DEPTH.svg";
import Year from "/assets/images/new_species/icons/YEAR.svg";
import Location from "/assets/images/new_species/icons/LOCATION.svg";
import Size from "/assets/images/new_species/icons/SIZE.svg";
import Paragraph from "../Paragraph/Paragraph";
import BubbleImage from "../../../components/BubbleImage/BubbleImage";


function Section({title, subtitle, text, italicWords, namedBy, vessel, vesselAfterText, photo, depth, depth2, depthSeparator, year, year2, yearSeparator, location,size, sizeText, image, alt}) {


  function esEntero(numero) {
    return numero % 1 === 0 ? true:false;
  }

  return (
    <SectionContainer>
        <section className="d-flex">
          <div className="images-container">
              <BubbleImage image={image} alt={alt} type={2}/>
              <div className="icons-container">
                  <IconWithText className={'CTA'} icon={Depth} numbers={depth} numbers2={depth2} separator={depthSeparator} text={"m"} opacity={1} textBefore="Depth: "></IconWithText>
                  <IconWithText className={'CTA'} icon={Year} numbers={year} numbers2={year2} separator={yearSeparator} text={""} opacity={1} textBefore="Year discovered: "></IconWithText>
                  <IconWithText className={'CTA'} icon={Location}  text={location} opacity={1} textBefore="Location: "></IconWithText>
                  {esEntero(size)?
                  <IconWithText className={'CTA'} icon={Size} numbers={size} text={sizeText} opacity={1} textBefore="Size: "></IconWithText>:
                  <IconWithText className={'CTA'} icon={Size} numbers={Math.floor(size)} numbers2={(size - Math.floor(size))*10} separator={'.'} text={sizeText} opacity={1} textBefore="Size: "></IconWithText>
                  }
                  
              </div>
          </div>
          <div className="paragraph-container">
              <Paragraph
                title={title}
                subtitle={subtitle}
                text={text}
                italicWords={italicWords}
                namedBy={namedBy}
                vessel={vessel}
                vesselAfterText={vesselAfterText?vesselAfterText:""}
                photo={photo}/>
          </div>
      </section>
    </SectionContainer>
    
  );
}

export default Section;