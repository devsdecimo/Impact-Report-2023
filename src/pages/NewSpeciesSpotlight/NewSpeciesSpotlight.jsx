import React from "react";
import { PageContainer } from "./NewSpeciesSpotlight.styles";
import Page from "../../components/Page/Page";
import Section from "./Section/Section";



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
        These are species that were discovered to be new to science on 
          <br></br>
        R/V <em>Falkor</em> and were scientifically described in publications this year.
        </p>
      </div>
      <div className="content">
      <Section
        title="Mundopsis cortesi"
        subtitle="Squat lobster"
        text="M. cortesi is distinguished from other squat lobsters by its distinctive pattern of small tooth-shaped spines on its legs; these spines are also present on the flanks of the body, which are called the pterygostomian flaps."
        italicWords={['M. cortesi']}
        namedBy="Dr. Paula Rodríguez Flores and co-authors"
        vessel="Falkor"
        photo="Dr. Greg Rouse"
        depth="742"
        year="2019"
        location="Jaco Summit, Costa Rica"
        size="1.5"
        sizeText = "cm"
        image="/assets/images/new_species/images/mcortesi3-C.webp"
        alt="pulpo"
      />
      <Section
        title="Munidopsis girguisi"
        subtitle="Squat lobster"
        text="Also known as Galatheid crabs, these animals are not lobsters, rather they are crabs. They have adapted to live in one of the harshest environments in the deep Ocean, and scientists suspect they feed on bacteria living at hydrothermal vents. This species is covered in filamentous bacteria, making it appear as if it is wearing a fuzzy coat."
        namedBy="Dr. Paula Rodríguez-Flores and co-authors"
        vessel="Falkor"
        vesselAfterText="This species was described using samples also collected on board E/V Nautilus"
        photo="Schmidt Ocean Institute"
        depth="381"
        depth2="845"
        depthSeparator="-"
        year="2018"
        year2="2019"
        yearSeparator="/"
        location="California, USA and Jaco Summit, Costa Rica"
        size="3"
        sizeText = "cm"
        image="/assets/images/new_species/images/Munidopsis-girguisi-C.webp"
        alt="pulpo"
      />
      <Section
        title="Abyssocladia falkor"
        subtitle="Sponge"
        text="Carnivorous sponges attach to the seafloor and extend their feeding structures into the water column to capture passing prey and small animals such as crustaceans. This new species is closely related to the Japanese species A. natsushimae, but it has a much smaller and circular body size."
        italicWords = {['A. natsushimae']}
        namedBy="Drs. Merrick Ekins and John N.A. Hooper"
        vessel="Falkor"
        photo="Schmidt Ocean Institute"
        depth="1820"
        year="2020"
        location="Great Barrier Reef, Australia"
        size="500"
        sizeText = "mm²"
        image="/assets/images/new_species/images/Abyssocladia-falkor-C.webp"
        alt="pulpo"
      />
      <Section
        title="Abyssocladia jeanvaceleti"
        subtitle="Sponge"
        text="ROV SuBastian’s cameras and delicate suctioning made it possible to collect and characterize whole specimens, facilitating the identification of this new species. These carnivorous sponges are known for their unique feeding structures and predatory behavior. This species is similar to Abssocladia falkor, but lacks features used for protection called microspheres and microstronglyes."
        italicWords = {['SuBastian’', 'Abssocladia falkor']}
        namedBy="Drs. Merrick Ekins and John N. A. Hooper"
        vessel="Falkor"
        photo=" Schmidt Ocean Institute"
        depth="1082"
        year="2020"
        location="Great Barrier Reef, Australia"
        size="120"
        sizeText = "mm²"
        image="/assets/images/new_species/images/Abyssocladia-jeanvaceleti-C.webp"
        alt="pulpo"
      />
      <Section
        title="Axoniderma wanda"
        subtitle="Sponge"
        text="Axoniderma wanda is unique among closely related examples of this species because they have an external lure originating from the convex face of the body. The species was named for its resemblance to the alien wanderer in the novel and 2013 film, The Host."
        italicWords = {['Axoniderma wanda', 'The Host']}
        namedBy="Drs. Merrick Ekins and John N. A. Hooper"
        vessel="Falkor"
        photo="1. Merrick Ekins  or 2. Schmidt Ocean Institute"
        depth="1980"
        year="2020"
        location="Great Barrier Reef, Australia"
        size="30"
        sizeText = "mm²"
        image="/assets/images/new_species/images/Axoniderma-wanda-C.webp"
        alt="pulpo"
      />
      <Section
        title="Pyrolycus jaco"
        subtitle="Eelpout fish"
        text="This new species is differentiated from two western Pacific fish with similar genetics by having a shorter head, snout, jaw and pectoral fins. It is the first vertebrate species to be described from the Jaco Scar hydrothermal seep site and named for its locality and only known habitat, Jaco Scar, on the Pacific Costa Rica margin."
        namedBy="Dr. Ben Frable and co-authors"
        vessel="Falkor"
        vesselAfterText="This species was described using samples also collected on board R/V Atlantis."
        photo="Schmidt Ocean Institute"
        depth="1746"
        depth2="1795"
        depthSeparator="-"
        year="2023"
        location="Jaco Scar, Costa Rica"
        size="107"
        sizeText = "mm"
        image="/assets/images/new_species/images/Pyrolycus-jaco-C.webp"
        alt="pulpo"
      />
      <Section
        title="Ophyrotrocha marinae"
        subtitle="Deep-sea polychaete worm"
        text="Ophyrotrocha marinae occurs at hydrothermal vents in the Gulf of California, often in great abundance around tubeworms, Oasisia alvinae, or on microbial mats near active flow."
        italicWords={['Ophyrotrocha marinae', 'Oasisia alvinae']}
        namedBy="Dr. Dongsheng Zhang and co-authors"
        vessel="Falkor"
        vesselAfterText="This species was described using samples also collected on board R/Vs Atlantis and Western Flyer."
        photo="Dr. Greg Rouse"
        depth="3676"
        depth2="3756"
        depthSeparator="-"
        year="2023"
        location="Gulf of California"
        size="10.5"
        sizeText = "mm"
        image="/assets/images/new_species/images/Ophyrotrocha-marinae-C.webp"
        alt="pulpo"
      />
      
      </div>
    </Page>
  </PageContainer>
  );
}

export default NewSpeciesSpotlight;
