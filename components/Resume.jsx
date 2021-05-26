import Container from "./Container";

export default function Resume(props) {
  const {
    id,
    children,
  } = props;

  return (
    <Container id={id}>
      {children}
    </Container>
  )
};

