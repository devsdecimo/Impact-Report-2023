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
        footer_image="/assets/images/executive_directors_note/Footer.webp"
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
          />
          <p>
            The awe of finding{" "}
            <a href="https://schmidtocean.org/cruise/in-search-of-hydrothermal-lost-cities/#news">
              new hydrothermal vent fields teeming with life
            </a>{" "}
            on the Mid-Atlantic Ridge during the inaugural scientific voyage was
            incredible, but that was just the start of a very big year. Amongst
            other things, we celebrated perfect newborn octopuses,{" "}
            <a href="https://schmidtocean.org/healthy-deep-sea-coral-reef-and-new-seamounts-in-the-galapagos/">
              new coral reefs
            </a>
            ,{" "}
            <a href="https://schmidtocean.org/massive-new-seamount-off-guatemala/">
              mapping new seamounts
            </a>{" "}
            and, with surprise and delight, being a part of the discovery of a{" "}
            <a href="https://schmidtocean.org/scientists-discover-new-ecosystem-underneath-hydrothermal-vents/">
              new animal ecosystem on Earth
            </a>
            - hidden just under the seafloor.
          </p>
          <p>
            I&rsquo;m proud of all that Schmidt Ocean Institute and the
            scientists and artists we have hosted have accomplished. The
            ship&rsquo;s crew and shoreside staff worked tirelessly to make this
            inaugural year of science possible while a global audience watched
            in wonderment alongside us. Our work has been featured on the{" "}
            <a href="https://schmidtocean.photoshelter.com/search/result/I0000YMVtSU.oC8o?terms=&amp;">
              Nasdaq Exchange screen
            </a>{" "}
            in Times Square,{" "}
            <a href="https://www.cbs.com/shows/video/YBqTWkkVaYdHYFCPIguiXXNrZeCXhldx/">
              CBS Mornings
            </a>
            ,{" "}
            <a href="https://www.today.com/video/scientists-use-new-vessel-for-never-before-seen-look-in-deep-sea-170792517749">
              The Today Show
            </a>
            , and in over 3,000 articles in global publications such as the{" "}
            <a href="https://www.theguardian.com/commentisfree/2023/jul/25/mining-companies-deep-sea-dangerous">
              Guardian
            </a>
            ,{" "}
            <a href="https://www.nytimes.com/2023/08/08/science/hydrothermal-vent-animals.html">
              New York Times
            </a>
            ,{" "}
            <a href="https://www.washingtonpost.com/science/2023/10/28/pristine-deep-water-reefs-galapagos/">
              Washington Post
            </a>{" "}
            , and more.
          </p>
          <p>
            Even as ROV <em>SuBastian&rsquo;s</em>{" "}
            <a href="https://www.youtube.com/@SchmidtOcean/videos?view=2&amp;sort=dd&amp;live_view=503&amp;shelf_id=0">
              Divestream footage
            </a>{" "}
            was being transmitted in real time, scientists and engineers on
            board <em>Falkor (too)</em> were testing new technologies that push
            our collective research and monitoring capabilities. These tools for
            sampling microplastics, detecting{" "}
            <a href="https://schmidtocean.org/scientists-use-new-technology-to-examine-health-of-deep-sea-corals/">
              coral superoxides
            </a>
            , and{" "}
            <a href="https://schmidtocean.org/scientists-locate-new-hydrothermal-vent-field-using-state-of-the-art-mapping-technology/">
              seeing the ocean floor
            </a>{" "}
            in fantastic detail expand our ability to detect the human footprint
            in the Ocean, assess the health of the Ocean, and increase our
            knowledge about the seabed and the creatures that reside there.
          </p>
          <ImageWithCircle2
            image={"/assets/images/executive_directors_note/TimesSquare.webp"}
            orientation="right"
          />
          <p>
            Robust partnerships and collaborations strengthen our ability to
            boldly explore our Ocean. This year, we joined the Nippon Foundation
            - Nekton{" "}
            <a href="https://schmidtocean.org/ocean-census-announced/">
              Ocean Census
            </a>{" "}
            program as a founding partner and began work with the Royal
            Institution in London, UK and Casa Del Mar in Santa Monica, US. We
            initiated the implementation of our partnerships with the{" "}
            <a href="https://schmidtocean.org/soi-ngs-partner-to-advance-diversity/">
              National Geographic Society
            </a>{" "}
            and IEEE-Oceanic Engineering Society/Marine Technology Society and
            continued work with UNESCO on the{" "}
            <a href="https://unesdoc.unesco.org/ark:/48223/pf0000387561/PDF/387561eng.pdf.multi">
              UN Ocean Decade
            </a>
            . And, through our{" "}
            <a href="https://schmidtocean.org/ocean-rising/">Ocean Rising</a>{" "}
            collaboration with Nekton, we continued to inspire new ocean
            ambassadors within popular culture sectors as we hosted fashion
            designers on <em>Falkor (too)</em> and shared beautiful undersea
            imagery in music festivals.
          </p>
          <p>
            Reflecting on our inaugural year with <em>Falkor (too)</em>, we are
            taking the lessons learned to grow and we look forward to welcoming
            scientists from South America on board as we sail off Peru, Chile,
            and Antarctica in 2024. I am proud to share the accomplishments of
            the Schmidt Ocean Institute team, the scientists we have sailed
            with, and the artists we have worked with, and hope you enjoy
            learning more about our collective impact. Thank you for joining us
            on this epic journey!
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
