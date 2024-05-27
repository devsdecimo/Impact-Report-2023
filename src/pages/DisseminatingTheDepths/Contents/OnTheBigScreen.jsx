import React from "react";
import BubbleImage from "../../../components/BubbleImage/BubbleImage";
import DisseminatingTheDepths from "../DisseminatingTheDepths";

function OnTheBigScreen({ children }) {
  return (
    <DisseminatingTheDepths
      title={
        <img
          src="/assets/images/disseminating_the_depths/on_the_big_screen/Title.svg"
          alt="On the BigScreen"
        />
      }
      header_image="/assets/images/disseminating_the_depths/on_the_big_screen//Header.webp"
      header_alt="Poster for “Deep Rising,” a full-length documentary film narrated by Hollywood leading man Jason Momoa that premiered at the prestigious Sundance "
      footer_image="/assets/images/disseminating_the_depths/on_the_big_screen/Footer.webp"
      footer_alt="Off the coast of Puerto Rico, coral is documented at a shallow depth where ambient light is available."
    >
      <BubbleImage
        image="/assets/images/disseminating_the_depths/on_the_big_screen/On the Big Screen  -  Deep_Rising-Poster_vertical.webp"
        className="screen-image"
        direction="up"
        alt="Poster for the documentary “Deep Rising” showing a red solitary hydroid."
      />
      <h3>On the Big Screen</h3>
      <p>
        Films encapsulate the power of visual storytelling in conveying the
        profound beauty and mysteries hidden beneath the Ocean's surface.
        Participation in film festivals allows Schmidt Ocean Institute to share
        our advances in cutting-edge technology and scientific findings while
        engaging a broader audience through mesmerizing footage from our
        underwater robot, ROV <em>SuBastian</em>.
      </p>
      <p>
        ROV<em> SuBastian</em> was the primary source of underwater footage in
        &ldquo;
        <a href="https://www.google.com/search?q=Deep+Rising+documentary&amp;client=firefox-b-1-d&amp;sca_esv=596692341&amp;ei=1YWcZcDZAdyv0PEP0PeW2AY&amp;ved=0ahUKEwiAmPfI-c6DAxXcFzQIHdC7BWsQ4dUDCBA&amp;uact=5&amp;oq=Deep+Rising+documentary&amp;gs_lp=Egxnd3Mtd2l6LXNlcnAiF0RlZXAgUmlzaW5nIGRvY3VtZW50YXJ5MgUQLhiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIjEC4YgAQYlwUY3AQY3gQY4AQY9AMY8QMY9QMY9gMY9wPYAQFI5xRQtAJYgBNwAXgBkAEAmAGeAaAB9gmqAQM4LjW4AQPIAQD4AQHCAgoQABhHGNYEGLADwgIIEC4YsQMYgATCAgoQABiABBiKBRhDwgImEC4YsQMYgAQYlwUY3AQY3gQY4AQY9AMY8QMY9QMY9gMY9wPYAQHCAgsQABiABBiKBRiRAsICIxAuGIAEGJcFGNwEGN4EGOAEGPQDGPEDGPUDGPYDGPcD2AEBwgILEAAYgAQYigUYhgPiAwQYACBBiAYBkAYIugYGCAEQARgU&amp;sclient=gws-wiz-serp#fpstate=ive&amp;vld=cid:df1991a1,vid:sFVBqg41jms,st:0" target="_blank" rel="noopener noreferrer">
          <u>Deep Rising</u>
        </a>
        ,&rdquo; a full-length documentary film narrated by actor Jason Momoa,
        that premiered at the prestigious Sundance Film Festival. The film
        garnered global press coverage, including CNN, The Guardian,
        Entertainment Weekly, and the New York Times. Deep Rising ran at over 50
        festivals worldwide and used SOI&rsquo;s still imagery in editorial
        articles and promotionally.
      </p>
      <p>
        Six short films created either by or in partnership with SOI, using
        footage from ROV <em>SuBastian</em> and activities on Research Vessels{" "}
        <em>Falkor</em> and <em>Falkor (too)</em>, were accepted into five film
        festivals this year. Collectively, the films won five awards including
        the Sylvia Earle Ocean Award in the MY HERO International Short Film
        Festival. A partnership with Natural World Facts, NWF, a popular YouTube
        channel with over 808,000 subscribers, resulted in a new 30-minute film
        called &ldquo;
        <a href="https://www.youtube.com/watch?v=dTKUEvGYvSg" target="_blank" rel="noopener noreferrer">
          <u>Mysteries of the Twilight Zone</u>
        </a>
        ,&rdquo; which won three awards. Last year&rsquo;s collaboration with
        NWF resulted in &ldquo;
        <a href="https://www.youtube.com/watch?v=pWy8womUPKY" target="_blank" rel="noopener noreferrer">
          <u>Robots in the Deep</u>
        </a>
        ,&rdquo; a 13-minute piece that took home two recognitions in 2023. The
        film&rsquo;s First Director, Leo Richards, was invited to the
        International Ocean Film Festival in San Francisco, where he served on
        panels and discussed working with SOI on the projects.
      </p>
    </DisseminatingTheDepths>
  );
}

export default OnTheBigScreen;
