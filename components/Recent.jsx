import React from "react";
import Card from "./Card";
import Container from "./Container";

export default function Recent(props) {
  /**
   * @param {string} id - Id for section
   * @param {string} heading - Heading for section
   * @param {object[]} cards - Each project you'd like to display organized in an array of objects
   * @param {string} cards.al - Aria-Label Text
   * @param {string} cards.link - Where this link should go
   * @param {string} cards.background - Url to image at top of card
   * @param {string} cards.heading - Heading for the Card, appears below image
   * @param {string} cards.subheading - Subheading; Tech Stack Label
   * @param {Object[]} cards.techStack - Items in Tech Stack
   * @param {string} cards.description - Paragraph describing card
   */
  const { id, heading, cards = [], children } = props;

  console.log("Recent", cards);

  return (
    <Container id={id}>
      <h2>{heading}</h2>
      {React.Children.toArray(cards.map((card) => <Card content={card} />))}
      {children}
    </Container>
  );
}
