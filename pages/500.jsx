import React from "react";
import Layout from "../layouts/Layout";
import Container from "../components/Container";
import Href from "../components/Href";

const Custom500 = () => {
  const background =
    "https://res.cloudinary.com/calebmastersdev/image/upload/v1621282948/cmdev/og-cmd_pu7fqj.png";

  return (
    <>
      <style jsx>{`
        a:before {
          background: url(${background}) no-repeat center center;
          background-size: cover;
        }
      `}</style>
      <Layout currentPage={`the500`}>
        <section id={`hero`} className={`page`}>
          <h1>
            Oh whoa!<span> 500</span>
          </h1>
          <Href href={`/`} al={`Back`} samePage={false}>
            Back to Safety
          </Href>
        </section>
        <section id="recent-work" className={`page`}>
          <Container>
            <article>
              <hgroup>
                <h3 aria-label={`Page Unavailable`} itemProp="title">
                  Internal Server Error
                </h3>
                <h4 itemProp="subheading">
                  I'm not gonna lie, this is bad. No clue how we got here but
                  what I can say for sure is it's probably not your fault. If
                  this just started happening on something that worked before...
                  then hopefully it'll be resolved soon.
                </h4>
              </hgroup>
              <p></p>
            </article>
          </Container>
        </section>
      </Layout>
    </>
  );
};

export default Custom500;
