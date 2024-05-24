import HeaderOne from "./components/global/HeaderOne";
import HeaderTwo from "./components/global/HeaderTwo";
import LinkBtn from "./components/global/LinkBtn";
import Footer from "./components/global/Footer";
import MedlemsSection from "./components/landingpage/MedlemsSection";
import styles from "./landingpage.module.scss";

export default function Home() {
  return (
    <>
      <main>
        <MedlemsSection />
      </main>
      <Footer />
    </>
  );
}
