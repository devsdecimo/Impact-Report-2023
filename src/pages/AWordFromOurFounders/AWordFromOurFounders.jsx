import React from "react";
import { PageContainer } from "./AWordFromOurFounders.styles";
import Page from "../../components/Page/Page";
import ImageWithCircle from "./ImageWithCircle/ImageWithCircle";
import ImageWithCircle2 from "./ImageWithCircle2/ImageWithCircle2";

import Founders from "/assets/images/a_word_from_our_founders/Founders.webp";
import CircleBg from "/assets/images/a_word_from_our_founders/CircleBg.webp";
import Subastian from "/assets/images/a_word_from_our_founders/Subastian.webp";
import Octopus from "/assets/images/a_word_from_our_founders/Octopus.webp";
import CarouselNav from "../../components/CarouselNav/CarouselNav";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import headerImage from "/assets/images/a_word_from_our_founders/Header.webp";

function AWordFromOurFounders() {
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
            src="/assets/images/a_word_from_our_founders/Title.svg"
            alt="A Word From Our Founders"
          />
        }
        header_image={headerImage}
        header_alt="R/V Falkor (too) at sunrise"
        footer_image="/assets/images/a_word_from_our_founders/Footer.webp"
        footer_alt="A hermit crab crawls on Corallium off the coast of Puerto Rico."
      >
        <div className="intro-text">
          <p>
            An epic journey begins with wonder. When we feel a spark of
            curiosity, spy a new horizon, we can’t help but want to imagine
            what’s next.
          </p>
        </div>
        <div className="content">
          <ImageWithCircle
            image={Founders}
            circleImage={CircleBg}
            orientation="left"
            alt="Wendy Schmidt and Eric Schmidt, Co-Founders of Schmidt Ocean Institute"
            alt2="A seabird darts past the ship, silhouetted against a gap in the stormy sky behind."
          />
          <p>
            With every expedition in the inaugural year of Schmidt Ocean
            Institute’s Research Vessel <em>Falkor (too)</em>, scientists
            brought new insights and images to light. Hundreds of wriggling
            shrimp atop black smoker hydrothermal vents revealed a marine
            community thriving in total darkness at the bottom of the Atlantic.
            An elusive squid species, rarely captured on film, floated by ROV{" "}
            <em>SuBastian</em> cameras, pink and feathery even at 2,000 meters
            beneath the surface. Mother octopuses, tentacles curled around their
            bodies, protected their precious eggs among dark rocks at the fifth
            known such site in the world. Tubeworms the size of a forearm living
            underneath the seafloor, part of a never-before-seen ecosystem, were
            observed. New massive coral reefs, towering sea mounts, and vast
            unknown vent fields came thunderously into view.
          </p>
          <ImageWithCircle2
            image={Octopus}
            circleImage={Subastian}
            orientation="right"
            alt="A cirrate octopus documented off the Galapagos Islands."
            alt2="ROV SuBastian is lifted back on board R/V Falkor (too)."
          />
          <p>
            The Ocean never ceases to surprise us. With each discovery, we find
            ourselves asking new questions as well as returning to the ones that
            have always anchored our work: What can we learn from our Ocean? How
            does it make our lives possible? And how can we protect it? These
            questions grow ever more urgent as our planet continues warming, as
            plastic pollution continues to flow freely into our waterways, and
            as mining companies seek to dig up — and irrevocably damage — the
            deep. Every discovery, every day on the water, and every minute
            spent breathing the oxygen the Ocean creates furthers our resolve to
            steward the seas and to journey onward.
          </p>
          <p>
            As our planet’s final frontier continues to fill us with wonder, the
            lesson we’ve taken from this first year will guide us
            forDisseminating the Depths: all the rest: the more we seek, the
            more we find. And, to quote <em>The Neverending Story</em>, having a
            luck dragon is the only way to go on a quest!
          </p>
          <p>
            <em>Eric & Wendy Schmidt</em>
          </p>
        </div>
        <ScrollToTop />
        <CarouselNav slides={navSlides} />
      </Page>
    </PageContainer>
  );
}

export default AWordFromOurFounders;
