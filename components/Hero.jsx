import React from "react";
import Href from "./Href";

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
        <Href
          href={`https://github.com/thecaleblee/calebmastersnext`}
          al={`This websites code on Github`}
          addClass={`github`}
          rel={`noopener`}
        >
          <img
            src="https://res.cloudinary.com/calebmastersdev/image/upload/v1628621456/cmdev/github_e5vqv0.svg"
            alt="Caleb Masters Dev Github"
            width="24"
            height="24"
          />
          View Code on Github
        </Href>
      </section>
    </>
  );
}
