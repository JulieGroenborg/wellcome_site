import LinkBtn from "../global/LinkBtn";
import styles from "./ClassItem.module.scss";

export default function ClassItem({ time, classtitle, coach, location, setChosenClassItem }) {
  return (
    <section className={styles.container}>
      <input type="radio" name="classes" id={classtitle} value={classtitle} className={styles.input} onChange={() => setChosenClassItem(classtitle)} />
      <label htmlFor={classtitle} className={styles.label}>
        <span>{time}</span>
        <span>{classtitle}</span>
        <span className={styles.grey_text}>{coach}</span>
        <span className={styles.grey_text}>{location}</span>
        <span className={styles.desk_btn_section}>
          {" "}
          <LinkBtn href="/" text="Tilmeld" variant="primary" />
        </span>
      </label>
    </section>
  );
}
