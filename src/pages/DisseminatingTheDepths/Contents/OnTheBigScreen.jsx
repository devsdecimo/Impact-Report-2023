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
      footer_image="/assets/images/disseminating_the_depths/on_the_big_screen/Footer.webp"
    >
      <BubbleImage
        image="/assets/images/disseminating_the_depths/on_the_big_screen/On the Big Screen  -  Deep_Rising-Poster_vertical.webp"
        className="screen-image"
        direction="up"
      />
      <h3>On the Big Screen</h3>
      <p>
        SOI&rsquo;s commitment to scientific exploration and marine discovery
        extends beyond traditional research avenues, as we recognize the power
        of visual storytelling in conveying the profound beauty and mysteries
        hidden beneath the Ocean's surface. As such, participation in film
        festivals serves multiple goals: sharing our advances in cutting-edge
        technology and scientific findings while engaging a broader audience
        through mesmerizing footage from our underwater robot, ROV{" "}
        <em>SuBastian</em>.
      </p>
      <p>
        ROV <em>SuBastain</em> was the primary source of underwater footage in{" "}
        &ldquo;
        <a href="https://www.google.com/search?q=Deep+Rising+documentary&amp;client=firefox-b-1-d&amp;sca_esv=596692341&amp;ei=1YWcZcDZAdyv0PEP0PeW2AY&amp;ved=0ahUKEwiAmPfI-c6DAxXcFzQIHdC7BWsQ4dUDCBA&amp;uact=5&amp;oq=Deep+Rising+documentary&amp;gs_lp=Egxnd3Mtd2l6LXNlcnAiF0RlZXAgUmlzaW5nIGRvY3VtZW50YXJ5MgUQLhiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIjEC4YgAQYlwUY3AQY3gQY4AQY9AMY8QMY9QMY9gMY9wPYAQFI5xRQtAJYgBNwAXgBkAEAmAGeAaAB9gmqAQM4LjW4AQPIAQD4AQHCAgoQABhHGNYEGLADwgIIEC4YsQMYgATCAgoQABiABBiKBRhDwgImEC4YsQMYgAQYlwUY3AQY3gQY4AQY9AMY8QMY9QMY9gMY9wPYAQHCAgsQABiABBiKBRiRAsICIxAuGIAEGJcFGNwEGN4EGOAEGPQDGPEDGPUDGPYDGPcD2AEBwgILEAAYgAQYigUYhgPiAwQYACBBiAYBkAYIugYGCAEQARgU&amp;sclient=gws-wiz-serp#fpstate=ive&amp;vld=cid:df1991a1,vid:sFVBqg41jms,st:0" target="_blank">
          Deep Rising,
        </a>
        &rdquo; a full-length documentary film narrated by Hollywood leading man
        Jason Momoa that premiered at the prestigious Sundance Film Festival.
        The film garnered global press coverage including CNN, The Guardian,
        Entertainment Weekly, and the New York Times. <em>Deep Rising</em> ran
        in over 50 festivals worldwide and used SOI still imagery in editorial
        articles and promotionally.
      </p>
      <p>
        Six short films created either by or in partnership with SOI, using
        footage from ROV <em>SuBastain</em> and activities on Research Vessels{" "}
        <em>Falkor</em> and<em> Falkor (too),</em> were accepted into five film
        festivals this year, winning nine awards of recognition. A partnership
        with Natural World Facts, or NWF, a popular YouTube channel with over
        808,000 subscribers, resulted in a new 30-minute film called &ldquo;
        <a href="https://www.youtube.com/watch?v=dTKUEvGYvSg" target="_blank">
          Mysteries of the Twilight Zone
        </a>
        ,&rdquo; which won three awards. Last year&rsquo;s collaboration with
        NWF resulted in &ldquo;
        <a href="https://www.youtube.com/watch?v=pWy8womUPKY" target="_blank">
          Robots in the Deep,
        </a>
        &rdquo; a 13-minute piece that took home two recognitions in 2023. The
        film&rsquo;s First Director, Leo Richards, was invited to the
        International Ocean Film Festival in San Francisco, where he served on
        panels and discussed working with SOI on the projects.
      </p>
    </DisseminatingTheDepths>
  );
}

export default OnTheBigScreen;
