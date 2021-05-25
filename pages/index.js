import Layout from "../layouts/Layout";
import Hero from "../components/Hero";
import Recent from "../components/Recent";
import Resume from "../components/Resume";

export default function Home() {
  const details = ["Front-End Engineer.", "UX Promoter.", "Hobby Collector."];

  return (
    <Layout currentPage={"Home"}>
      <Hero
        id={"hero"}
        tagline={"obligatory portfolio for"}
        emHeading={"Caleb"}
        heading={"Masters"}
        talkingPoints={details}
      />
      <Recent
        id={'recent-work'}
        heading={"Projects I've Worked On Recently"}
      />
      <Resume
        id={'resume'}
      />
    </Layout>
  );
}
