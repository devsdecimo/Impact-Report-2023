import React from "react";
import { PageContainer } from "./ExecutiveDirectorsNote.styles";
import Page from "../../components/Page/Page";
import ImageWithCircle from "./ImageWithCircle/ImageWithCircle";
import ImageWithCircle2 from "./ImageWithCircle2/ImageWithCircle2";

import CarouselNav from "../../components/CarouselNav/CarouselNav";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

function ExecutiveDirectorsNote() {
  const navSlides = [
    {
      img: "/assets/images/a_word_from_our_founders/Falkor_Sunrise.webp",
      href: "/a_word_from_our_founders",
      text: "A Word from our Founders",
    },
    {
      img: "/assets/images/executive_directors_note/Seamount.webp",
      href: "/executive_directors_note",
      text: "Executive Director's Note",
    },
  ];

  return (
    <PageContainer>
      <Page
        title={
          <img
            src="/assets/images/executive_directors_note/Title.svg"
            alt="A Word From Our Founders"
          />
        }
        header_image="/assets/images/executive_directors_note/Header.webp"
        header_alt="The third of four seamounts discovered by mapping experts on board R/V Falkor (too) is 1,644 meters in height."
        footer_image="/assets/images/executive_directors_note/Footer.webp"
        footer_alt="Prickly shark seen near Gemales II Seamount in the Galapagos Islands."
      >
        <div className="intro-text">
          <p>
            This was a truly historic and momentous year at Schmidt Ocean
            Institute as we embarked on new adventures of scientific discovery
            with R/V <em>Falkor (too)</em>.
          </p>
        </div>
        <div className="content">
          <ImageWithCircle
            image={"/assets/images/executive_directors_note/BubbleImage1.webp"}
            circleImage={
              "/assets/images/executive_directors_note/BubbleImage2.webp"
            }
            alt="Dr. Jyotika Virmani, Executive Director of Schmidt Ocean Institute"
            alt2="R/V Falkor (too) testing the launch and recovery of mapping AUVs."
          />

          <p>
            Finding new hydrothermal vent fields teeming with life
            on the Mid-Atlantic Ridge during the inaugural scientific voyage was
            awe-inspiring, and that was just the start of a very big year. We
            celebrated newly hatched octopuses, marveled at{" "}
            <a href="https://schmidtocean.org/healthy-deep-sea-coral-reef-and-new-seamounts-in-the-galapagos/" target="_blank" rel="noopener noreferrer">
              new coral reefs
            </a>
            , were excited by freshly mapped
            <a href="https://schmidtocean.org/massive-new-seamount-off-guatemala/" target="_blank" rel="noopener noreferrer">
              {" "}
              seamounts
            </a>
            , and were surprised and delighted by the discovery of a{" "}
            <a href="https://schmidtocean.org/scientists-discover-new-ecosystem-underneath-hydrothermal-vents/" target="_blank" rel="noopener noreferrer">
              new animal ecosystem on Earth
            </a>{" "}
            hidden under the seafloor.
          </p>
          <p>
            I&rsquo;m proud of all we have accomplished alongside the
            scientists, artists, and{" "}
            <a href="https://schmidtocean.org/how-to-apply-for-berths-opportunity-artists-setting-the-course-2023/" target="_blank" rel="noopener noreferrer">
              Berth of Opportunity
            </a>{" "}
            participants we hosted. The ship&rsquo;s crew and shoreside staff
            worked tirelessly to make this inaugural year of science possible
            while ROV <em>SuBastian&rsquo;s </em>
            <a href="https://www.youtube.com/@SchmidtOcean/videos?view=2&amp;sort=dd&amp;live_view=503&amp;shelf_id=0" target="_blank" rel="noopener noreferrer">
              Divestream transmitted
            </a>{" "}
            in real-time to a global audience. The fascinating discoveries made
            in 2023 were featured on the{" "}
            <a href="https://schmidtocean.photoshelter.com/search/result/I0000YMVtSU.oC8o?terms=&amp;" target="_blank" rel="noopener noreferrer">
              Nasdaq Exchange screen
            </a>{" "}
            in New York&rsquo;s Times Square,{" "}
            <a href="https://www.cbs.com/shows/video/YBqTWkkVaYdHYFCPIguiXXNrZeCXhldx/" target="_blank" rel="noopener noreferrer">
              CBS Mornings
            </a>
            ,{" "}
            <a href="https://www.today.com/video/scientists-use-new-vessel-for-never-before-seen-look-in-deep-sea-170792517749" target="_blank" rel="noopener noreferrer">
              The Today Show
            </a>
            , and in more than 4,000 press articles in global publications such
            as{" "}
            <a href="https://www.theguardian.com/commentisfree/2023/jul/25/mining-companies-deep-sea-dangerous" target="_blank" rel="noopener noreferrer">
              The Guardian
            </a>
            ,{" "}
            <a href="https://www.nytimes.com/2023/08/08/science/hydrothermal-vent-animals.html" target="_blank" rel="noopener noreferrer">
              New York Times
            </a>
            ,{" "}
            <a href="https://www.washingtonpost.com/science/2023/10/28/pristine-deep-water-reefs-galapagos/" target="_blank" rel="noopener noreferrer">
              Washington Post
            </a>
            , and more.
          </p>
          <p>
            Scientists and engineers on board <em>Falkor (too)</em> tested new
            technologies that push our collective research and monitoring
            capabilities. Tools for sampling microplastics, detecting reactive
            oxygen species in corals, and{" "}
            <a href="https://schmidtocean.org/scientists-locate-new-hydrothermal-vent-field-using-state-of-the-art-mapping-technology/" target="_blank" rel="noopener noreferrer">
              mapping the ocean floor
            </a>{" "}
            in fantastic detail expanded our ability to discern the human
            footprint in the Ocean, assess ocean health, and increase our
            knowledge about the seabed and the creatures that reside there.
          </p>
          <ImageWithCircle2
            image={"/assets/images/executive_directors_note/TimesSquare.webp"}
            orientation="right"
            alt="Deep sea scenes from SOI Galapagos expeditions play on the Nasdaq Exchange big screen in Times Square for New York Climate Week."
          />
          <p>
            Robust global partnerships and collaborations strengthened our
            ability to boldly explore our Ocean. We joined The Nippon Foundation
            - Nekton{" "}
            <a href="https://schmidtocean.org/ocean-census-announced/" target="_blank" rel="noopener noreferrer">
              Ocean Census
            </a>{" "}
            program as a founding partner, and began work with the Royal
            Institution in London, UK, and the U.S. California-based Hotel Casa
            Del Mar. We continued to work with the{" "}
            <a href="https://schmidtocean.org/soi-ngs-partner-to-advance-diversity/" target="_blank" rel="noopener noreferrer">
              National Geographic Society
            </a>
            ,{" "}
            <a href="https://schmidtocean.org/international-student-competition-support-oceans-2021/" target="_blank" rel="noopener noreferrer">
              Marine Technology Society/IEEE-Oceanic Engineering Society
            </a>
            , and the United Nations Educational, Scientific, and Cultural
            Organization on the{" "}
            <a href="https://unesdoc.unesco.org/ark:/48223/pf0000387561/PDF/387561eng.pdf.multi" target="_blank" rel="noopener noreferrer">
              UN Decade of Ocean Science for Sustainable Development
            </a>
            . And, through our{" "}
            <a href="https://schmidtocean.org/ocean-rising/" target="_blank" rel="noopener noreferrer">
              Ocean Rising collaboration with Nekton
            </a>
            , we are bringing the inspiration of the Ocean to popular culture
            sectors by hosting fashion designers on <em>Falkor (too)</em> and
            sharing beautiful undersea imagery in musical performances such as
            the Vilnius Biennial of Performance Art in Lithuania.&nbsp;
          </p>
          <p>
            Implementing our 10-year expedition plan, we look forward to
            welcoming scientists from South America on board over the next three
            years. I hope you enjoy this report, which contains the stories of
            2023 in greater detail. Thank you for joining us on this epic
            journey!
          </p>
          <p>Fair winds and following seas,</p>
          <p>
            <em>Dr. Jyotika Virmani</em>
          </p>
        </div>
        <ScrollToTop />
        <CarouselNav slides={navSlides} />
      </Page>
    </PageContainer>
  );
}

export default ExecutiveDirectorsNote;
