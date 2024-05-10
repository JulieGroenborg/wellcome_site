import LinkBtn from "../global/LinkBtn";
import styles from "./ClassItem.module.scss";

export default function ClassItem({ time, classtitle, coach, location, chosenClassItem, setChosenClassItem }) {
  return (
    <>
      <section className={styles.container} onFocus={() => setChosenClassItem(classtitle)}>
        <input type="radio" name="weekdays" id={classtitle} value={classtitle} className={styles.input} />
        <label htmlFor={classtitle} className={styles.label}>
          <span>{time}</span>
          <span>{classtitle}</span>
          <span className={styles.grey_text}>{coach}</span>
          <span className={styles.grey_text}>{location}</span>
        </label>
      </section>
      {/* {chosenClassItem === classtitle && (
        <section className={styles.mobile_btn_section}>
          <LinkBtn href="/" text="Tilmeld" variant="primary" />
        </section>
      )} */}
    </>
  );
}
