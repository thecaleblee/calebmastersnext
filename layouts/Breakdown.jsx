import Layout from "../layouts/Layout";
import data from "../lib/calebmasters.json";

export async function getStaticProps() {
  return {
    props: {
      data,
    },
  };
}

export default function Breakdown({ data }) {
  const {
    pages = []
  } = data;

  return (
    <Layout currentPage={pages}>
    </Layout>
  );
}
