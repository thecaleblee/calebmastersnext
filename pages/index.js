import Layout from "../layouts/Layout";
import Hero from "../components/Hero";
import Recent from "../components/Recent";
import Skills from '../components/Skills';
import Resume from "../components/Resume";
import data from '../lib/calebmasters.json'

export async function getStaticProps() {
  return {
    props: {
      data
    }
  }
}

export default function Home({ data }) {

  const {
    details = {},
    recentWork = {},
    skillSet = {},
    resumeContent = {},
  } = data;

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
        cards={recentWork}
      />
      <Skills
        id={'skills'}
        heading={"Skills"}
        subheading={"From design to pixel perfect & deployed"}
        al="Skill Level"
        skillSet={skillSet}
      />
      <Resume
        id={"resume"}
        heading={"Resumé"}
        subheading={"Me as a piece of paper"}
        content={resumeContent}
      />
    </Layout>
  );
}
