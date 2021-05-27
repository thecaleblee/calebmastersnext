import React from "react";
import Container from "./Container";

export default function Resume(props) {
  const {
    id = "",
    heading = "",
    subheading = "",
    content = {},
    children,
  } = props;

  const {
    title = "",
    downloadText = "",
    downloadUrl = "",
    contactText = "",
    urlText = "",
    url = "",
    al = "",
    location = "",
    summary = "",
    experienceTitle = "",
    experience = []
  } = content;

  return (
    <Container id={id}>
      <h2>
        {heading}
        <span>{subheading}</span>
      </h2>
      <article>
        <header>
          <h2>
            {title}
            <span>
              <a
                href={downloadUrl}
                al={downloadText}
              >
                {downloadText}
              </a>
            </span>
          </h2>
          <p>
            {contactText}
          </p>
          <p>
            <a
                href={url}
                al={al}
                target="_blank"
                rel="noopener"
              >
                {urlText}
              </a>
          </p>
          <p>
            {location}
          </p>
        </header>
        <section>
          <h3>Summary</h3>
          <p>{summary}</p>
        </section>
        <section>
          <h3>{experienceTitle}</h3>
          {React.Children.toArray(experience.map((job) => {
            const {
              company,
              dates,
              position,
              responsibilities = []
            } = job;

            return(
              <>
                <hgroup>
                  <h4>{company}<span aria-label={`Employed from ${dates}`}>{dates}</span></h4>
                  <h5>{position}</h5>
                </hgroup>
                <ul>
                  {React.Children.toArray(responsibilities.map((task) => <li>{task}</li>))}
                </ul>
              </>
            )
          }))}
        </section>
      </article>
      {children}
    </Container>
  )
};
