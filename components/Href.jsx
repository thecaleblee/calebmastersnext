import React from "react";
import Link from "next/link";
import { Link as Scroller, animateScroll as scroll } from "react-scroll";

export default function Href(props) {
  /**
   * @param {URL} background - URL of an image location
   * @param {string} href - The href of the link
   * @param {string} al - Aria-Label for the link
   * @param {string} addClass - Class names to add to link
   * @param {bool} samePage - Enable to make smooth scrolling anchor links
   * @param {string} rel - Use to include 'noopener' on links
   *
   * @example <Href background={optional: URL-to-background} href={href-of-link} al={aria-label for link} external addClass={optional class names} samePage />
   */
  const {
    samePage = false,
    background = "",
    href = "/",
    al = "",
    addClass = "",
    children,
    tabindex = 0,
    rel = "",
  } = props;

  return (
    <>
      {samePage ? (
        <Scroller
          activeClass="active"
          to={href}
          spy={false}
          smooth={true}
          offset={0}
          duration={500}
          aria-label={al}
          className={addClass}
        >
          {children}
        </Scroller>
      ) : (
        <>
          <style jsx>{`
            a:before {
              background: url(${background}) no-repeat center center;
              background-size: cover;
            }
          `}</style>
          <Link href={href}>
            {addClass ? (
              <a
                href={href}
                aria-label={al}
                className={addClass}
                tabIndex={tabindex}
                rel={rel}
              >
                {children}
              </a>
            ) : (
              <a href={href} aria-label={al} rel={rel} tabIndex={tabindex}>
                {children}
              </a>
            )}
          </Link>
        </>
      )}
    </>
  );
}
