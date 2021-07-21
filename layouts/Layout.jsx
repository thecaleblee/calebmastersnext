import Hat from '../components/Hat'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Layout(props) {
  const {
    currentPage = 'Home',
    children
  } = props;

  return (
    <>
      <Hat title={'Caleb Masters - Front End Engineer Portfolio'} currentPage={currentPage} />
      <Nav currentPage={currentPage} />
      {children}
      <Footer currentPage={currentPage} />
    </>
  )
}