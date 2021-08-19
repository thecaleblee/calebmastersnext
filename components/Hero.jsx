import React from "react";
import Href from "./Href";

export default function Hero(props) {
  const {
    id,
    tagline,
    emHeading,
    heading,
    talkingPoints,
    linkText,
    linkHref,
    linkImgUrl,
    linkAriaLabel,
    linkClass,
  } = props;

  return (
    <>
      <section id={id}>
        <h1>
          <p>{tagline}</p>
          <span>{emHeading}</span> {heading}
        </h1>
        <ul>
          {React.Children.toArray(
            talkingPoints.map((point) => <li>{point}</li>)
          )}
        </ul>
        <Href
          href={linkHref}
          al={linkAriaLabel}
          addClass={linkClass}
          rel={`noopener`}
        >
          <img src={linkImgUrl} alt={linkAriaLabel} width="24" height="24" />
          {linkText}
        </Href>
      </section>
    </>
  );
}
