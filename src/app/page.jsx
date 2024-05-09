import HeaderOne from "./components/HeaderOne";
import styles from "./components/page.module.scss";

export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
        <HeaderOne color="white" title="Vores hold kategorier"></HeaderOne>
      </main>
    </>
  );
}
