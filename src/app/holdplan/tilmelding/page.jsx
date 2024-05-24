import HeaderOne from "@/app/components/global/HeaderOne";
import Link from "next/link";
import styles from "./tilmelding.module.scss";

export default function Tilmeldning() {
  return (
    <>
      <main className={styles.main}>
        <HeaderOne title="Tilmeldt hold" color="black" />
        <Link className={styles.link} href="/holdplan">
          Tilbage til Holdplan
        </Link>
      </main>
    </>
  );
}
