import React from "react";

export default function Hero(props) {
  const { id, tagline, emHeading, heading, talkingPoints } = props;

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
      </section>
    </>
  );
}
