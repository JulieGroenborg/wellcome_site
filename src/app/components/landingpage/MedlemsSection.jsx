import styles from "./MedlemsSection.module.scss";
import MedlemsCards from "./MedlemsCards";

export default function MedlemsSection(title) {
  return (
    <section className={styles.full_section}>
      <h2>Vores Medlemskaber</h2>
      {/* <h2 className={styles.title}>{title}</h2> */}
      <div className={styles.medlemscards_section}>
        <MedlemsCards text="Fitness Medlem"></MedlemsCards>
        <MedlemsCards text="Club Medlem"></MedlemsCards>
        <MedlemsCards text="Young Medlem"></MedlemsCards>
      </div>
    </section>
  );
}
