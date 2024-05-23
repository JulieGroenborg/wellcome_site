"use client";
import { useState } from "react";
import styles from "./Burger.module.scss";
import BurgerCollapse from "./BurgerCollapse";
export default function Burger() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSub, setOpenSub] = useState("");

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen); //Togglefunktion, som sørger for at sætte false til true (og omvendt) ved klik på button
  };
  return (
    <nav className={styles.burger_nav}>
      <button className={styles.burger_btn} onClick={() => handleToggle()}>
        <div className={`${styles.burger} ${isOpen && styles.is_active}`}>
          <div className={styles.bar}>Åben menu</div>
        </div>
      </button>
      <ul className={`${styles.burger_menu} ${isOpen ? styles.appear : styles.disappear}`}>
        <BurgerCollapse
          navName="Fitness"
          subLinks={[
            { title: "Hold Kategorier", href: "/kategorier" },
            { title: "Holdplan", href: "/holdplan" },
            { title: "Personlig Træning", href: "/" },
            { title: "Kost & Ernæring", href: "/" },
            { title: "Osteopati", href: "/" },
          ]}
          openSub={openSub}
          setOpenSub={setOpenSub}
        />
        <BurgerCollapse
          navName="Spa"
          subLinks={[
            { title: "Om Spaen", href: "/" },
            { title: "Behandlinger", href: "/" },
          ]}
          openSub={openSub}
          setOpenSub={setOpenSub}
        />
        <BurgerCollapse
          navName="Medlemskaber"
          subLinks={[
            { title: "Se medlemskaber", href: "/" },
            { title: "Firmaaftaler", href: "/" },
          ]}
          openSub={openSub}
          setOpenSub={setOpenSub}
        />
        <BurgerCollapse
          navName="Om Wellcome"
          subLinks={[
            { title: "Kontakt", href: "/" },
            { title: "Medarbejdere", href: "/" },
            { title: "Events & Nyheder", href: "/" },
            { title: "Om Wellcome", href: "/" },
          ]}
          openSub={openSub}
          setOpenSub={setOpenSub}
        />
      </ul>
    </nav>
  );
}
