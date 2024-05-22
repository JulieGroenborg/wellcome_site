import styles from "./MedlemsSection.module.scss";
import MedlemsCards from "./MedlemsCards";

export default function MedlemsSection(title) {
  return (
    <section className={styles.full_section}>
      <h2>Vores medlemskaber</h2>
      {/* <h2 className={styles.title}>{title}</h2> */}
      <div className={styles.medlemscards_section}>
        <MedlemsCards
          text="Fitness Medlem"
          image="medlems_image1"
          // overlay="overlay"
        ></MedlemsCards>
        <MedlemsCards
          text="Club Medlem"
          image="medlems_image2"
          // overlay="overlay"
        ></MedlemsCards>
        <MedlemsCards
          text="Young Medlem"
          image="medlems_image3"
          // overlay="overlay"
        ></MedlemsCards>
      </div>
    </section>
  );
}
