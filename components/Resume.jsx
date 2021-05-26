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
      </article>
      {children}
    </Container>
  )
};
