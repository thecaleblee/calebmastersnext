import React from "react";
import Card from "../components/Card";

export default function Recent(props) {
  const {
    id,
    heading,
    cards = [],
    children,
  } = props;

  return (
    <>
      <section id={id}>
        <div className={'container'}>
          <h2>{heading}</h2>
          {React.Children.toArray(cards.map((card) => {
            <Card content={card} />
          }))}
          {children}
        </div>
      </section>
    </>
  )
};

