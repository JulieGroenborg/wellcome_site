import Link from "next/link";
import styles from "./MedlemsCards.module.scss";

export default function MedlemsCards({ text, href, image }) {
  return (
    <Link href={"/"} prefetch={false} className={`${styles.medlems_Link} `}>
      <div
        className={`${styles.medlems_card} ${styles[image]} ${styles.overlay}`}
      >
        <div className={styles.overlay}>{text}</div>
      </div>{" "}
    </Link>
  );
}
