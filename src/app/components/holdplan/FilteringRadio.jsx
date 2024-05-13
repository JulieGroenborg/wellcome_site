import styles from "./FilteringRadio.module.scss";

//skal have et unikt id, et label og samme name som de radioBtn den er i gruppe med
//Hvis det skal være checked fra start af (det skal "alle kategorier"), så skal den have checked=true
export default function FilteringRadio({ id, name, label, color, setChosenCategory, checked }) {
  return (
    <div className={styles.radio_button}>
      <input
        type="radio"
        name={name}
        id={id}
        value={id}
        className={styles.input}
        onChange={() => {
          setChosenCategory(id);
        }}
        defaultChecked={checked}
      />
      <label htmlFor="all-categories" className={`${styles.label} ${styles[color]}`}>
        {label}
      </label>
    </div>
  );
}
