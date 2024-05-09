import Link from "next/link";
import styles from "@/app/components/global/LinkBtn.module.scss";

//LinkBtn have five variants:
//primary, secondary, tertiary_dark, tertiary_light and spa

export default function LinkBtn({ href, text, variant }) {
  return (
    <Link href={href} prefetch={false} className={`${styles.wellcomeBtn} ${styles[variant]}`}>
      {text}
    </Link>
  );
}
