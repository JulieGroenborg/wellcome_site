import styles from "./DayRadio.module.scss";

export default function DayRadio({ day, setChosenDay, chosenDay }) {
  //Her findes det første bogstav i dagen til brug på mobilen
  const mobiletext = day.slice(0, 1);

  //Herunder finder vi ud af hvilken dag skal være pre-checked. Ved første rendering vil dagen i dag være checked.
  //Da chosenDay viser hvilken dag det er i dag i form af et tal (søndag=0 - lørdag=6) skal vi oversætte dette til dagens navn, hvilket vi gør ved at have dayNames i et array i denne rækkefølge
  const dayNames = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"];
  const today = dayNames[chosenDay];
  const isToday = today === day ? true : false;
  console.log(dayNames[day]);

  return (
    <section className={styles.container}>
      <input
        type="radio"
        name="weekdays"
        id={day}
        value={day}
        onChange={() => {
          //setChosenDay({ day });
        }}
        className={styles.input}
        defaultChecked={isToday}
      />
      <label htmlFor={day} className={styles.label}>
        <span className={styles.desk_text}>{day}</span>
        <span className={styles.mobile_text}>{mobiletext}</span>
      </label>
    </section>
  );
}
