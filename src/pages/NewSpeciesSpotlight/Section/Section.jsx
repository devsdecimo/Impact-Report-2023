import React from "react";
import { SectionContainer } from "./Section.styles";
import IconWithText from "../../../components/IconWithText/IconWithText";
import Depth from "/assets/images/new_species/icons/Depth.svg";
import Year from "/assets/images/new_species/icons/Year.svg";
import Location from "/assets/images/new_species/icons/Location.svg";
import Size from "/assets/images/new_species/icons/Size.svg";
import Paragraph from "../Paragraph/Paragraph";
import ImageWithCircle from "../ImageWithCircle/ImageWithCircle";


function Section({title, subtitle, text, italicWords, namedBy, vessel, vesselAfterText, photo, depth, depth2, depthSeparator, year, year2, yearSeparator, location,size, sizeText, image, alt}) {
  return (
    <SectionContainer>
        <section className="d-flex">
          <div className="images-container">
              <ImageWithCircle image={image} alt={alt}/>
              <div className="icons-container">
                  <IconWithText className={'CTA'} icon={Depth} numbers={depth} numbers2={depth2} separator={depthSeparator} text={"m"} opacity={0.9} textBefore="Depth: "></IconWithText>
                  <IconWithText className={'CTA'} icon={Year} numbers={year} numbers2={year2} separator={yearSeparator} text={""} opacity={0.9} textBefore="Year discovered: "></IconWithText>
                  <IconWithText className={'CTA'} icon={Location}  text={location} opacity={0.9} textBefore="Location: "></IconWithText>
                  <IconWithText className={'CTA'} icon={Size} numbers={size} text={sizeText} opacity={0.9} textBefore="Size: "></IconWithText>
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