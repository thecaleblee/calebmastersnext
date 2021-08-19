import Layout from "../layouts/Layout";
import Hero from "../components/Hero";
import Recent from "../components/Recent";
import Skills from "../components/Skills";
import Resume from "../components/Resume";
import { fetchContent } from "../utils/contentful";

let bigQuery = `
{
  heroContent: heroCollection(limit:1) {
    items {
      id
      tagline
      emHeading
      heading
      talkingPoints: listItems
      linkText
      linkHrefCollection(limit: 7) {
        items {
          downloadUrl
          siteType
        }
      }
      linkImgUrl
      linkAriaLabel
      linkClass
    }
  }
  recentContent: recentCollection(limit: 3) {
    items {
      id
      heading
      sitesCollection(limit: 7) {
        recentWork: items {
          id
          siteType
          link
          background
          heading
          subheading
          techStack
          description
        }
      }
    }
  }
  skillsContent: skillsCollection(limit: 1) {
    items {
      id
      heading
      subheading
      skillSetCollection(limit: 3) {
        items {
          category
          skillsCollection(limit: 11) {
            skillSet: items {
              name
              percent
            }
          }
        }
      }
    }
  }
  resumeContent: resumeCollection(limit: 10) {
    items {
      id
      heading
      subheading
      title
      downloadText
      downloadUrl
      contactText
      urlText
      url
      location
      summary
      experienceTitle
      references
    }
  }
}
`;

export async function getStaticProps() {
  const data = await fetchContent(bigQuery);
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  const details = data.heroContent.items[0];
  const recent = data.recentContent.items[0];
  const { recentWork } = recent.sitesCollection;
  const skills = data.skillsContent.items[0];
  const resume = data.resumeContent.items[0];

  // Filter for only Next.JS/React content
  let nextRecentWork = recentWork.filter(
    (e) => e.siteType === "All" || e.siteType === "React"
  );

  let linkHref = details.linkHrefCollection.items.filter(
    (e) => e.siteType === "React"
  )[0];

  return (
    <Layout currentPage={"Home"}>
      <Hero
        id={details.id}
        tagline={details.tagline}
        emHeading={details.emHeading}
        heading={details.heading}
        talkingPoints={details.talkingPoints}
        linkText={details.linkText}
        linkHref={linkHref.downloadUrl}
        linkImgUrl={details.linkImgUrl}
        linkAriaLabel={details.linkAriaLabel}
        linkClass={details.linkClass}
      />
      <Recent id={recent.id} heading={recent.heading} cards={nextRecentWork} />
      <Skills
        id={skills.id}
        heading={skills.heading}
        subheading={skills.subheading}
        al={skills.ariaLabel}
        skillSet={skills.skillSetCollection.items}
      />
      <Resume
        id={resume.id}
        heading={resume.heading}
        subheading={resume.subheading}
        content={resume}
      />
    </Layout>
  );
}
