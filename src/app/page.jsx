import HeaderOne from "./components/global/HeaderOne";

export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
        <HeaderOne color="white" title="Vores hold kategorier"></HeaderOne>
      </main>
    </>
  );
}
