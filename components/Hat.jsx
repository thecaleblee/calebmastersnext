import Head from "next/head";

export default function Hat(props = {}) {
  const { title = "", currentPage = "Home" } = props;

  return (
    <Head>
      <title>
        {title} - {currentPage}
      </title>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="Content-Type" content="text/html; charSet= ISO-8859-1" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="robots" content="index, follow" />
      <meta
        name="description"
        content="Engineer Portfolio for Caleb Masters. Front-End Engineer, UX promotor, and Hobby Collector"
      />
      <meta
        property="og:title"
        content="Caleb Masters - Front-End Engineer Portfolio "
      />
      <meta
        property="og:site_name"
        content="Caleb Masters - Front-End Engineer Portfolio "
      />
      <meta property="og:url" content="calebmasters.dev" />
      <meta
        property="og:description"
        content="Engineer Portfolio for Caleb Masters. Front-End Engineer, UX promotor, and Hobby Collector"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/calebmastersdev/image/upload/v1621282948/cmdev/og-cmd_pu7fqj.png"
      />
      <script type="text/javascript" src="/public/accessibility.js"></script>
    </Head>
  );
}
