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
          href={'#top'}
          aria-label={'Back to Top'}
          addClass={'top'}
        >
          Back to Top
        </Href>
      </div>
    </section>
  )
}
