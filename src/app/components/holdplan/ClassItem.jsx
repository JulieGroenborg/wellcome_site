import LinkBtn from "../global/LinkBtn";
import styles from "./ClassItem.module.scss";

export default function ClassItem({ time, classtitle, coach, location, setChosenClassItem }) {
  return (
    <section className={styles.container} onFocus={() => setChosenClassItem(classtitle)}>
      <input type="radio" name="classes" id={classtitle} value={classtitle} className={styles.input} />
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
