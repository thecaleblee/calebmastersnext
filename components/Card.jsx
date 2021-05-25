import React from "react";
import Href from "./Href";

export default function Card(content) {

  /**
   * @param {string} al - Aria-Label Text
   * @param {string} link - Where this link should go 
   * @param {string} background - Url to image at top of card 
   * @param {string} heading - Heading for the Card, appears below image 
   * @param {string} subheading - Subheading; Tech Stack Label 
   * @param {Object[]} techStack - Items in Tech Stack 
   * @param {string} description - Paragraph describing card 
   * @example <Card content={cardContentObject} />
   */

  const {
    al,
    link,
    background,
    heading,
    subheading,
    techStack = [],
    description,
    children,
  } = content;

  return (
    <Href
      href={link}
      aria-label={al}
      style={`
          --background: url(${background});
          background-size: cover;
        `}
    >
      <article>
        <hgroup>
          <h3 aria-label={heading} itemprop="title">
            {heading}
          </h3>
          <h4 itemprop="subheading">
            <span>{subheading}</span>
            {React.Children.toArray(techStack.map((item) => item))}
          </h4>
        </hgroup>
        <p>{description}</p>
        {children}
      </article>
    </Href>
  );
}
