import LinkBtn from "./components/global/LinkBtn";
import Footer from "./components/global/Footer";
import MedlemsSection from "./components/landingpage/MedlemsSection";
import styles from "./landingpage.module.scss";
import Header from "./components/global/Header";
import Layout from "./components/global/Layout";

export default function Home() {
  return (
    <>
      <Layout current={{ nav: "", site: "" }}>
        <main>
          <LinkBtn href="/" text="hello" variant="primary" />
          <LinkBtn href="/" text="hello" variant="primary" />
          <LinkBtn href="/" text="hello" variant="primary" />

          <h1 className={styles.xlight}>header 1</h1>
          <h1 className={styles.light}>header 1</h1>
          <h1 className={styles.regular}>header 1</h1>
          <h1 className={styles.medium}>header 1</h1>
          <h1 className={styles.semi}>header 1</h1>
          <h1 className={styles.bold}>header 1</h1>

          <LinkBtn href="/" text="hello" variant="primary" />
          <LinkBtn href="/" text="hello" variant="primary" />
          <LinkBtn href="/" text="hello" variant="primary" />
          <LinkBtn href="/" text="hello" variant="primary" />
          <LinkBtn href="/" text="hello" variant="primary" />
          <LinkBtn href="/" text="hello" variant="primary" />
          <LinkBtn href="/" text="hello" variant="primary" />
          <LinkBtn href="/" text="hello" variant="primary" />
          <LinkBtn href="/" text="hello" variant="primary" />
          <LinkBtn href="/" text="hello" variant="primary" />
          <LinkBtn href="/" text="hello" variant="primary" />
          <LinkBtn href="/" text="hello" variant="primary" />
          <LinkBtn href="/" text="hello" variant="primary" />
          <LinkBtn href="/" text="hello" variant="primary" />
          <LinkBtn href="/" text="hello" variant="primary" />
          <LinkBtn href="/" text="hello" variant="primary" />
          <LinkBtn href="/" text="hello" variant="primary" />
          <LinkBtn href="/" text="hello" variant="primary" />
          <LinkBtn href="/" text="hello" variant="primary" />
          <LinkBtn href="/" text="hello" variant="primary" />
          <LinkBtn href="/" text="hello" variant="primary" />
          <LinkBtn href="/" text="hello" variant="primary" />
          <LinkBtn href="/" text="hello" variant="primary" />
          <LinkBtn href="/" text="hello" variant="primary" />
          <LinkBtn href="/" text="hello" variant="primary" />
          <LinkBtn href="/" text="hello" variant="primary" />
          <LinkBtn href="/" text="hello" variant="primary" />
          <LinkBtn href="/" text="hello" variant="primary" />
          <LinkBtn href="/" text="hello" variant="primary" />
          <LinkBtn href="/" text="hello" variant="primary" />
          <LinkBtn href="/" text="hello" variant="primary" />
          <LinkBtn href="/" text="hello" variant="primary" />
          <MedlemsSection />
        </main>
      </Layout>
    </>
  );
}
