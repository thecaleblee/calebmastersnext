import React from "react";
import Layout from "../layouts/Layout";
import Container from "../components/Container";
import Href from "../components/Href";

const Custom404 = () => {
  const background =
    "https://res.cloudinary.com/calebmastersdev/image/upload/v1621282948/cmdev/og-cmd_pu7fqj.png";

  return (
    <>
      <style jsx>{`
        article:before {
          background: url(${background}) no-repeat center center;
          background-size: cover;
        }
      `}</style>
      <Layout currentPage={`the404`}>
        <section id={`hero`} className={`page`}>
          <h1>
            Yikes!<span> 404</span>
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
                  Page Unavailable
                </h3>
                <h4 itemProp="subheading"></h4>
              </hgroup>
              <p>
                It's just as likely this page <i>should</i> exist and I just
                haven't built it yet. Or it's a typo. Or, I dunno, aliens?
              </p>
            </article>
          </Container>
        </section>
      </Layout>
    </>
  );
};

export default Custom404;
