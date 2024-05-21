import Link from "next/link";
import styles from "./MedlemsCards.module.scss";

export default function MedlemsCards({ text, href }) {
  return (
    <div className={styles.medlems_image}>
      <Link href={"/"} prefetch={false} className={`${styles.Medlems_Link} `}>
        {text}
      </Link>
    </div>
  );
}
