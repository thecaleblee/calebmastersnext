import React from "react";
import { useRouter } from "next/router";
import Layout from "../layouts/Layout";
import Container from "../components/Container";
import data from "../lib/calebmasters.json";
import Href from "../components/Href";

export async function getStaticPaths() {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
}

export async function getStaticProps() {
  return {
    props: {
      data,
    },
  };
}

const id = ({ data }) => {
  // Get static props
  const { page = [] } = data;

  // Get URI value
  const router = useRouter();
  const { id } = router.query;

  // Search data for page object with matching URI value
  const currentPageData = page.find((obj) => obj.name === id);

  const {
    name = "",
    heading = "",
    emHeading = "",
    background = "",
    techStack = [],
    breakdown = "",
  } = currentPageData;

  return (
    <Layout currentPage={id}>
      <section id={`hero`} className={`page`}>
        <h1>
          {heading}
          <span>{emHeading}</span>
        </h1>
        <Href href={`/#recent-work`} al={`Back`} samePage={false}>
          Back
        </Href>
      </section>
      <section id="recent-work" className={`page`}>
        <Container>
          <article>
            <style jsx>{`
              article:before {
                background: url(${background}) no-repeat center center;
                background-size: cover;
              }
            `}</style>
            <hgroup>
              <h3 aria-label={heading} itemProp="title">
                {heading}
              </h3>
              <h4 itemProp="subheading">
                <span>Tech Stack: </span>
                {React.Children.toArray(
                  techStack.map((item, i) => (
                    <>
                      {item}
                      {i + 1 === techStack.length ? "." : ", "}
                    </>
                  ))
                )}
              </h4>
            </hgroup>
            <p>{breakdown}</p>
          </article>
        </Container>
      </section>
    </Layout>
  );
};

export default id;
