import Container from "./Container";

export default function Skills(props) {
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
