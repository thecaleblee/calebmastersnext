import Link from "next/link";

export default function Href(props) {
  const { href, al = "", style = "", children } = props;

  return (
    <Link href={href}>
      {style ? (
        <a aria-label={al} className={style}>{children}</a>
      ) : (
        <a aria-label={al}>{children}</a>
      )}
    </Link>
  );
}
