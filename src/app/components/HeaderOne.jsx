import styles from "./HeaderOne.module.scss";

export default function HeaderOne({ title, color }) {
  return <h1 className={`${styles[color]}`}>{title}</h1>;
}
