import HeaderOne from "./components/global/HeaderOne";
import HeaderTwo from "./components/global/HeaderTwo";
import LinkBtn from "./components/global/LinkBtn";
import Footer from "./components/global/Footer";
import MedlemsSection from "./components/landingpage/MedlemsSection";
import styles from "./landingpage.module.scss";
import Burger from "./components/global/Burger";

export default function Home() {
  return (
    <>
      <header>
        <Burger />
      </header>
      <main>
        <LinkBtn href="/" text="hello" variant="primary" />
        <MedlemsSection />
      </main>
      <Footer />
    </>
  );
}
