import Layout from "../layouts/Layout";
import Hero from "../components/Hero";
import Recent from "../components/Recent";
import Resume from "../components/Resume";

export default function Home() {
  const details = ["Front-End Engineer.", "UX Promoter.", "Hobby Collector."];
  const recentWork = [
    {
      al: "",
      link: "/bluehost",
      background: "https://res.cloudinary.com/calebmastersdev/image/upload/v1620844282/cmdev/bluehost_bc3c2l.jpg",
      heading: "Bluehost.com",
      subheading: "Tech Stack:",
      techStack: [
        "React",
        "JS",
        "SCSS",
        "Enzyme",
        "Sketch",
        "Invision",
        "Optimizely",
        "AWS",
        "Git",
        "Jira"
      ],
      description: "Created React components for an in house framework based on Next.js to allow pages to be generated dynamically using Contentful as a CMS."
    },
{
      al: "",
      link: "/bluehost",
      background: "https://res.cloudinary.com/calebmastersdev/image/upload/v1620844282/cmdev/bluehost_bc3c2l.jpg",
      heading: "Bluehost.com",
      subheading: "Tech Stack:",
      techStack: [
        "React",
        "JS",
        "SCSS",
        "Enzyme",
        "Sketch",
        "Invision",
        "Optimizely",
        "AWS",
        "Git",
        "Jira"
      ],
      description: "Created React components for an in house framework based on Next.js to allow pages to be generated dynamically using Contentful as a CMS."
    },
  ];

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
      <Resume
        id={'resume'}
      />
    </Layout>
  );
}
