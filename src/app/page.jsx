import HeaderThree from "./components/HeaderThree";
import styles from "./components/page.module.scss";

export default function Home() {
  return (
    <main className={`${styles.main}`}>
      <HeaderThree headerthree="Yesss"></HeaderThree>
    </main>
  );
}
