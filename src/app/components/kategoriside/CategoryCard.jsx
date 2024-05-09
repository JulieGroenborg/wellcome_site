import styles from "./CategoryCard.module.scss";
import Link from "next/link";

export default function CategoryCard({ href, title, category }) {
  return (
    <Link href={href} prefetch={false}>
      <section className={`${styles.card} ${styles[category]}`}>
        <div className={styles.overlay}>
          <h2 className={styles.title}>{title}</h2>
        </div>
      </section>
    </Link>
  );
}

// import styles from "./HeaderOne.module.scss";

// export default function HeaderOne({ title, color }) {
//   return <h1 className={`${styles[color]}`}>{title}</h1>;
// }

{
  /* <section className={`${styles.card} ${styles[kategory]}`}></section> */
}
