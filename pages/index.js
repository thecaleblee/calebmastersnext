import Layout from "../layouts/Layout";
import Hero from "../components/Hero";
import Recent from "../components/Recent";
import Resume from "../components/Resume";

export default function Home() {
  const details = ["Front-End Engineer.", "UX Promoter.", "Hobby Collector."];
  const recentWork = [
    {
      al: "Recent Work Example: Bluehost.com",
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
      al: "Recent Work Example: HostGator.com",
      link: "/hostgator",
      background: "https://res.cloudinary.com/calebmastersdev/image/upload/v1620845531/cmdev/hostgator_vzcs0u.jpg",
      heading: "HostGator.com",
      subheading: "Tech Stack:",
      techStack: [
        "Mason",
        "Perl",
        "JS",
        "SCSS",
        "Jest",
        "Sketch",
        "Invision",
        "Monetate",
        "Git",
        "Jira"
      ],
      description: "Created custom components and pages in the Perl based platform Mason, optimized the HTML/CSS of the legacy site, & created new landing pages utilizing an in house content management system."
    },
    {
      al: "Recent Work Example: This Website - Github Link",
      link: "https://github.com/thecaleblee/calebmasters",
      background: "https://res.cloudinary.com/calebmastersdev/image/upload/v1621370702/cmdev/calebmastersdev_cjbyeh.jpg",
      heading: "This Website",
      subheading: "Tech Stack:",
      techStack: [
        "JS",
        "SCSS",
        "Photoshop",
        "Netlify",
        "Serve",
        "Git",
      ],
      description: " Designed and built minimally without a framework to provide relavant information about myself but also to demonstrate my skillset. Please take a look at the code, run a Lighthouse report, or toggle the tech stack in the sub-nav."
    }
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
