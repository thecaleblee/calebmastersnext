import Href from './Href';

export default function Container(props) {
  const {
    id,
    children
  } = props;

  return (
    <section id={id}>
      <div className={'container'}>
        {children}
        <Href
          href={'top'}
          al={'Back to Top'}
          addClass={'top'}
          samePage
        >
          Back to Top
        </Href>
      </div>
    </section>
  )
}
