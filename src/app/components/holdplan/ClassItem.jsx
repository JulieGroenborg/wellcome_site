import styles from "./ClassItem.module.scss";

export default function ClassItem({ classtitle }) {
  return (
    <section className={styles.container}>
      <input type="radio" name="weekdays" id={classtitle} value={classtitle} className={styles.input} />
      <label htmlFor={classtitle} className={styles.label}>
        <span>tid</span>
        <span>{classtitle}</span>
        <span>træner</span>
        <span>lokale</span>
      </label>
    </section>
  );
}
