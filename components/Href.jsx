import Link from "next/link";

export default function Href(props) {
  const { background = "", href, al = "", addClass = "", children } = props;

  return (
    <>
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
    </>
  );
}
