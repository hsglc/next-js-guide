import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Hi there, I'm a Front-End Developer]</p>
        <p>
          You can contact me on{" "}
          <a href="https://twitter.com/hgulcu0">Twitter</a>.
        </p>
      </section>
    </Layout>
  );
}
