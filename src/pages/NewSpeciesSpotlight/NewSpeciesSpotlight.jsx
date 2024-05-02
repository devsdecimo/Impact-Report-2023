import React from "react";
import { PageContainer } from "./NewSpeciesSpotlight.styles";
import Page from "../../components/Page/Page";
import Section from "./Section/Section";
import Counter from "../../components/Counter/Counter";

function NewSpeciesSpotlight() {
  return (
    <PageContainer>
      <Page
        title={
          <img
            src="/assets/images/new_species/Title.svg"
            alt="New species and Seafloor Spotlight"
          />
        }
        header_image="/assets/images/new_species/Header.webp"
        footer_image="/assets/images/new_species/Footer.webp"
      >
        <div className="intro-text">
          <p>
            Researchers identified these species — found on R/V <em>Falkor</em>{" "}
            expeditions — as new to science and published their findings this
            year.
          </p>
        </div>
        <div className="content">
          <Section
            title="Mundopsis cortesi"
            subtitle="Squat lobster"
            text="Mundopsis cortesi is distinguished from other squat lobsters by its distinctive pattern of small tooth-shaped spines on its legs; these spines are also present on the flanks of the body, which are called the pterygostomian flaps."
            italicWords={["Mundopsis cortesi"]}
            namedBy={
              <a href="https://www.publish.csiro.au/is/Fulltext/IS22030">
                Dr. Paula Rodríguez Flores and co-authors
              </a>
            }
            expedition={
              <a href="https://schmidtocean.org/cruise/costa-rican-deep-sea-connections/">
                Costa Rican Deep-Sea Connections
              </a>
            }
            vessel="Falkor"
            photo="Dr. Greg Rouse"
            depth="742"
            year="2019"
            location="Jaco Summit, Costa Rica"
            size="1.5"
            sizeText="cm"
            image="/assets/images/new_species/images/mcortesi3-C.webp"
            alt="pulpo"
          />
          <Section
            title="Munidopsis girguisi"
            subtitle="Squat lobster"
            text="Also known as Galatheid crabs, these animals are not lobsters, rather they are crabs. They have adapted to live in one of the harshest environments in the deep Ocean, and scientists suspect they feed on bacteria living at hydrothermal vents. This species is covered in filamentous bacteria, making it appear as if it is wearing a fuzzy coat."
            namedBy={
              <a href="https://www.publish.csiro.au/is/Fulltext/IS22030">
                Dr. Paula Rodríguez-Flores and co-authors
              </a>
            }
            expedition={
              <a href="https://schmidtocean.org/cruise/costa-rican-deep-sea-connections/">
                Interdisciplinary Investigation of a New Hydrothermal Vent Field
                and Costa Rican Deep-Sea Connections{" "}
              </a>
            }
            vessel="Falkor"
            vesselAfterText="Samples collected on board E/V Nautilus were also used to describe this new species."
            photo="Dr. Greg Rouse"
            depth="381"
            depth2="845"
            depthSeparator="-"
            yearText={
              <>
                <Counter separator={false}>2018</Counter>
                <em>, with additional samples collected in</em>{" "}
                <Counter separator={false}>2019</Counter>{" "}
                <em>to scientifically describe the species.</em>{" "}
              </>
            }
            location="California, USA and Jaco Summit, Costa Rica"
            size="3"
            sizeText="cm"
            image="/assets/images/new_species/images/Munidopsis-girguisi-C.webp"
            alt="pulpo"
          />
          <Section
            title="Abyssocladia falkor"
            subtitle="Sponge"
            text="Carnivorous sponges attach to the seafloor and extend their feeding structures into the water column to capture passing prey and small animals such as crustaceans. This new species is closely related to the Japanese species Abyssocladia natsushimae, but it has a much smaller and circular body size."
            italicWords={["Abyssocladia falkor"]}
            namedBy={
              <a href="https://mapress.com/zt/article/view/zootaxa.5293.3.2">
                Drs. Merrick Ekins and John N.A. Hooper
              </a>
            }
            expedition={
              <a href="https://schmidtocean.org/cruise/seamounts_canyons_reefs_coralsea/">
                Seamounts, Canyons, and Reefs of the Coral Sea
              </a>
            }
            vessel="Falkor"
            photo="Schmidt Ocean Institute"
            depth="1820"
            year="2020"
            location="Great Barrier Reef, Australia"
            size="500"
            sizeText="mm²"
            image="/assets/images/new_species/images/Abyssocladia-falkor-C.webp"
            alt="pulpo"
          />
          <Section
            title="Abyssocladia jeanvaceleti"
            subtitle="Sponge"
            text="These carnivorous sponges are known for their feeding structures and predatory behavior. This species is similar to Abssocladia falkor, but lacks features used for protection called microspheres and microstronglyes."
            italicWords={["SuBastian’", "Abssocladia falkor"]}
            namedBy={
              <a href="https://mapress.com/zt/article/view/zootaxa.5293.3.2">
                Drs. Merrick Ekins and John N. A. Hooper
              </a>
            }
            expedition={
              <a href="https://schmidtocean.org/cruise/seamounts_canyons_reefs_coralsea/">
                Seamounts, Canyons, and Reefs of the Coral Sea
              </a>
            }
            vessel="Falkor"
            photo=" Schmidt Ocean Institute"
            depth="1082"
            year="2020"
            location="Great Barrier Reef, Australia"
            size="120"
            sizeText="mm²"
            image="/assets/images/new_species/images/Abyssocladia-jeanvaceleti-C.webp"
            alt="pulpo"
          />
          <Section
            title="Axoniderma wanda"
            subtitle="Sponge"
            text="Axoniderma wanda is unique among closely related examples of this species because they have an external lure originating from the convex face of the body. The species was named for its resemblance to the alien wanderer in the novel and 2013 film, The Host."
            italicWords={["Axoniderma wanda", "The Host"]}
            namedBy={
              <a href="https://mapress.com/zt/article/view/zootaxa.5293.3.2">
                Drs. Merrick Ekins and John N. A. Hooper
              </a>
            }
            expedition={
              <>
                <a href="https://schmidtocean.org/cruise/seamounts_canyons_reefs_coralsea/">
                  Seamounts, Canyons, and Reefs of the Coral Sea
                </a>{" "}
                and{" "}
                <a href="https://schmidtocean.org/cruise/northern-depths-of-the-great-barrier-reef/">
                  Northern Depths of the Great Barrier Reef
                </a>
              </>
            }
            vessel="Falkor"
            photo="Merrick Ekins"
            depth="1980"
            year="2020"
            location="Great Barrier Reef, Australia"
            size="30"
            sizeText="mm²"
            image="/assets/images/new_species/images/Axoniderma-wanda-C.webp"
            alt="pulpo"
          />
          <Section
            title="Pyrolycus jaco"
            subtitle="Eelpout fish"
            text="This new species is differentiated from two western Pacific fish with similar genetics by having a shorter head, snout, jaw, and pectoral fins. It is the first vertebrate species to be described from the Jaco Scar hydrothermal seep site and named for its locality and only known habitat, Jaco Scar, on the Pacific Costa Rica margin."
            featuredBy={
              <a href="https://www.mapress.com/zt/article/view/zootaxa.5230.1.5/49763">
              Dr. Ben Frable and co-authors
              </a>
            }
            expedition={
              <a href="https://schmidtocean.org/cruise/costa-rican-deep-sea-connections/">
                Costa Rican Deep-Sea Connections
              </a>
            }
            vessel="Falkor"
            vesselAfterText="Samples collected on board R/V Atlantis were also used to describe this new species."
            photo="Schmidt Ocean Institute"
            depth="1746"
            depth2="1795"
            depthSeparator="-"
            year="2019"
            location="Jaco Scar, Costa Rica"
            size="107"
            sizeText="mm"
            image="/assets/images/new_species/images/Pyrolycus-jaco-C.webp"
            alt="pulpo"
          />
          <Section
            title="Ophyrotrocha marinae"
            subtitle="Deep-sea polychaete worm"
            text="Ophyrotrocha marinae is found at hydrothermal vents in the Gulf of California, often in great abundance around Oasisia alvinae, a species of deep-sea tubeworm, on microbial mats near active flows. "
            italicWords={["Ophyrotrocha marinae", "Oasisia alvinae"]}
            namedBy={
              <a href="https://europeanjournaloftaxonomy.eu/index.php/ejt/article/view/2101/8815">
                Dr. Dongsheng Zhang and co-authors
              </a>
            }
            expedition={
              <>
                <a href="https://schmidtocean.org/cruise/interdisciplinary-investigation-of-new-hydrothermal-vent-field/">
                  {" "}
                  Interdisciplinary Investigation of a New Hydrothermal Vent
                  Field{" "}
                </a>{" "}
                and{" "}
                <a href="https://schmidtocean.org/cruise/interdisciplinary-investigation-of-the-pescadero-basin/">
                  Interdisciplinary Investigation of the Pescadero Basin{" "}
                </a>
              </>
            }
            vessel="Falkor"
            vesselAfterText="Samples collected on board R/Vs Atlantis and Western Flyer were also used to describe this new species."
            photo="Dr. Greg Rouse"
            depth="3676"
            depth2="3756"
            depthSeparator={<>&nbsp;to&nbsp;</>}
            yearText={
              <>
                <Counter separator={false}>2018</Counter>{" "}
                <em>with additional samples collected in</em>{" "}
                <Counter separator={false}>2021</Counter>{" "}
                <em>to scientifically describe the species.</em>
              </>
            }
            location="Gulf of California"
            size="10.5"
            sizeText="mm"
            image="/assets/images/new_species/images/Ophyrotrocha-marinae-C.webp"
            alt="pulpo"
          />
        </div>
      </Page>
    </PageContainer>
  );
}

export default NewSpeciesSpotlight;
