import HeaderOne from "./components/global/HeaderOne";
import HeaderTwo from "./components/global/HeaderTwo";
import LinkBtn from "./components/global/LinkBtn";
import Footer from "./components/global/Footer";
import MedlemsSection from "./components/landingpage/MedlemsSection";
import styles from "./landingpage.module.scss";

//API url: https://hovludcpqudqvcqteblj.supabase.co/rest/v1/Hold
//API key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhvdmx1ZGNwcXVkcXZjcXRlYmxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwMzI4MzEsImV4cCI6MjAyOTYwODgzMX0.5K-wz_oerFZ5hmvUq0IOPgJHn0e1sRYh57y_8pFqnKk

// let headersList = {
//   apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhvdmx1ZGNwcXVkcXZjcXRlYmxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwMzI4MzEsImV4cCI6MjAyOTYwODgzMX0.5K-wz_oerFZ5hmvUq0IOPgJHn0e1sRYh57y_8pFqnKk",
//   Prefer: "return=representation",
// };

// let response = await fetch("https://hovludcpqudqvcqteblj.supabase.co/rest/v1/Hold", {
//   method: "GET",
//   headers: headersList,
// });

// let data = await response.json();

// console.log(data);

export default function Home() {
  return (
    <>
      <main>
        <section className={`${styles.hero_section} ${styles.overlay}`}>
          <article className={styles.hero_text}>
            <h1>
              Ekslusiv
              <br /> <span className={styles.italic_h1}>fitness og spa</span>
              <br /> i hjertet af Hellerup
            </h1>
            <div className={styles.btn}>
              <LinkBtn href="/" text="Bliv medlem" variant="primary" />
              <LinkBtn href="/" text="book hold" variant="tertiary_light" />
            </div>
          </article>
        </section>
        <MedlemsSection />
      </main>
      <Footer />
    </>
  );
}
