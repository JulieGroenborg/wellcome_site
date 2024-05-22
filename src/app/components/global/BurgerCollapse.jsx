import Link from "next/link";
import styles from "./BurgerCollapse.module.scss";

export default function BurgerCollapse({ navName, subLinks, isSubOpen, setIsSubOpen }) {
  const handleToggle = () => {
    isSubOpen === navName ? setIsSubOpen("") : setIsSubOpen(navName);
  };

  return (
    <li className={styles.list_item}>
      <button className={`${styles.nav_btn} ${isSubOpen === navName && styles.active}`} onClick={() => handleToggle()}>
        {navName}
      </button>

      {subLinks.map((link) => {
        const uniqueId = Math.random();
        return (
          <Link key={uniqueId} href={link.href} className={`${styles.sub_nav_link} ${isSubOpen === navName ? styles.visible : styles.hide}`}>
            {link.title}
          </Link>
        );
      })}
    </li>
  );
}
