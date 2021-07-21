export default function Footer(props) {
  const {
    currentPage,
  } = props;

  const isHome = currentPage === 'Home';

  return (
    <>
      {isHome ? (
        <footer>
          <p>&copy; 2021 Caleb Masters</p>
        </footer>
      ) : (
        <footer className={`page`}>
          <p>&copy; 2021 Caleb Masters</p>
        </footer>
      )}
    </>
  )
};
