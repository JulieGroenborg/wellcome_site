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
