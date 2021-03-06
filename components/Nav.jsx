import React from "react";
import Href from "../components/Href";

export default function Nav(props) {
  const { currentPage } = props;

  const isHome = currentPage === "Home";

  return (
    <header id={"top"}>
      <nav role={"navigation"} al={"Main Navigation"}>
        <ul>
          <li>
            <Href href={"/"} ariaLable={"Home"}>
              <img
                src="https://res.cloudinary.com/calebmastersdev/image/upload/v1620762551/cmdev/cmlogo-t_aavg64.png"
                alt="Caleb Masters Dev"
                width="55"
                height="30"
              />
            </Href>
          </li>
          <li>
            <Href
              href={isHome ? "recent-work" : "/#recent-work"}
              al={"Recent Work"}
              samePage={isHome ? true : false}
            >
              <>
                <i className="gg-browser"></i>
                Recent Work
              </>
            </Href>
          </li>
          <li>
            <Href
              href={isHome ? "skills" : "/#skills"}
              al={"Skills"}
              samePage={isHome ? true : false}
            >
              <>
                <i className="gg-terminal"></i>
                Skills
              </>
            </Href>
          </li>
          <li>
            <Href
              href={isHome ? "resume" : "/#resume"}
              al={"Resumé"}
              samePage={isHome ? true : false}
            >
              <i className="gg-briefcase"></i> Resumé
            </Href>
          </li>
        </ul>
        <ul className={"tech"} aria-hidden="true">
          <li>
            <Href
              href={"https://calebmasters.dev/"}
              al={"Change Website Tech Stack to: HTML/CSS/JS"}
              tabindex="-1"
            >
              HTML/CSS/JS
            </Href>
          </li>
          <li>
            <Href
              href={"/"}
              al={"Change Website Tech Stack to: React/Next.js"}
              addClass={"active"}
              tabindex="-1"
            >
              React/Next.js
            </Href>
          </li>
          <li>
            <Href
              href={"https://ng.calebmasters.dev/"}
              al={"Change Website Tech Stack to: Angular.js/SCSS"}
              tabindex="-1"
            >
              Angular.js/SCSS
            </Href>
          </li>
          <li>
            <Href
              href={"https://vue.calebmasters.dev/"}
              al={"Change Website Tech Stack to: Vue.js/SCSS/TS"}
              tabindex="-1"
            >
              Vue.js/SCSS/TS
            </Href>
          </li>
        </ul>
      </nav>
    </header>
  );
}
