import styles from "./HeaderTwo.module.scss";

//Dette komponent har en class="spa" eller class="fitness", som sættes med attributen: type
export default function HeaderTwo({ title, type }) {
  return <h2 className={`${styles[type]}`}>{title}</h2>;
}
