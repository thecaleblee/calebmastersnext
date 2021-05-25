export default function Resume(props) {
  const {
    id,
    children,
  } = props;

  return (
    <>
      <section id={id}>
        <div className={'container'}>
          {children}
        </div>
      </section>
    </>
  )
};

