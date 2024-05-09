import styles from "./DayRadio.module.scss";

export default function DayRadio({ day, setChosenDay, preselected }) {
  //Her findes det første bogstav i dagen til brug på mobilen
  const mobiletext = day.slice(0, 1);

  return (
    <section className={styles.container}>
      <input
        type="radio"
        name="weekdays"
        id={day}
        value={day}
        onChange={() => {
          setChosenDay({ day });
        }}
        className={styles.input}
      />
      <label htmlFor={day} className={styles.label}>
        <span className={styles.desk_text}>{day}</span>
        <span className={styles.mobile_text}>{mobiletext}</span>
      </label>
    </section>
  );
}
