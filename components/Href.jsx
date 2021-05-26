import Link from "next/link";

export default function Href(props) {
  /**
   * @param {URL} background - URL of an image location
   * @param {string} href - The href of the link
   * @param {string} al - Aria-Label for the link
   * @param {string} addClass - Class names to add to link
   *
   * @example <Href background={optional: URL-to-background} href={href-of-link} al={aria-label for link} external addClass={optional class names} />
   */
  const { background = "", href, al = "", addClass = "", children } = props;

  return (
    <Href>
      <style jsx>{`
        a:before {
          background: url(${background}) no-repeat center center;
          background-size: cover;
        }
      `}</style>
      <Link href={href}>
        {addClass ? (
          <a aria-label={al} className={addClass}>
            {children}
          </a>
        ) : (
          <a aria-label={al}>{children}</a>
        )}
      </Link>
    </Href>
  );
}
