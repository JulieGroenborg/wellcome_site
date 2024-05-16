"use client";
import { useState, useEffect } from "react";
import styles from "./holdplan.module.scss";
import LinkBtn from "../components/global/LinkBtn";
import DayRadio from "../components/holdplan/DayRadio";
import ClassItem from "../components/holdplan/ClassItem";
import ArrowBtn from "../components/global/ArrowBtn";
import FilteringSection from "../components/holdplan/FilteringSection";

//API url: https://hovludcpqudqvcqteblj.supabase.co/rest/v1/Hold
//API key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhvdmx1ZGNwcXVkcXZjcXRlYmxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwMzI4MzEsImV4cCI6MjAyOTYwODgzMX0.5K-wz_oerFZ5hmvUq0IOPgJHn0e1sRYh57y_8pFqnKk

export default function Holdplan() {
  const [chosenCategory, setChosenCategory] = useState("all-categories"); //State til at vide hvilken kategori, der filtreres efter
  const [chosenClass, setChosenClass] = useState("all-class"); //State til at vide hvilket hold, der filtreres efter
  const [chosenClassItem, setChosenClassItem] = useState(""); //State til at vide hvilket hold, der er valgt i kalenderen
  const [weekNumber, setWeekNumber] = useState(21); //State til at vide hvilken uge der vises
  const [chosenDayNumber, setChosenDayNumber] = useState(new Date().getDay()); //State til at vide hvilken dag er valgt. Er ved 1st rendering nr. på dagen i dag.
  const [allClasses, setAllClasses] = useState([]); //State der skal indeholde alle hold, der passer til kategori filtrering
  const [classSelection, setClassSelection] = useState([]); //State der kun skal indeholde den valgte dags hold. Dette er det data, der bliver vist på siden

  //useEffect kører ved første rendering, samt hver gang chosenCategory, chosenDayNumber eller chosenClass bliver ændret
  useEffect(() => {
    async function showClasses() {
      //Hvis chosenCategory er sat til en kategori, skal der kun fetches hold indenfor kategorien
      const filteringParameters = chosenCategory !== "all-categories" ? `?category=eq.${chosenCategory}` : "";

      let headersList = {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhvdmx1ZGNwcXVkcXZjcXRlYmxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwMzI4MzEsImV4cCI6MjAyOTYwODgzMX0.5K-wz_oerFZ5hmvUq0IOPgJHn0e1sRYh57y_8pFqnKk",
        Prefer: "return=representation",
      };

      let response = await fetch(`https://hovludcpqudqvcqteblj.supabase.co/rest/v1/Hold${filteringParameters}`, {
        method: "GET",
        headers: headersList,
      });

      let data = await response.json();

      setAllClasses([]); //Her rydder vi allClasses, så den er tom og klar til det nye data
      setClassSelection([]); //Her rydder vi classSelection, så den er tom og klar til det nye data

      //Her map'er vi over vores data, og ved hvert hold (item) map'er vi igen i deres "time" data (det array med objekter for hvert tidspunkt holdet afholdes)
      //Vi opdaterer allClasses + classSelection states til at indeholde en ny version af vores fetchede data. Her putter vi holdene ind for hver gang de skal optræde på planen
      data.map((item) => {
        item.time.map((obj) => {
          setAllClasses((allClasses) => [...allClasses, { title: item.title, trainer: item.trainer, location: item.location, time: obj }]);
          setClassSelection((allClasses) => [...allClasses, { title: item.title, trainer: item.trainer, location: item.location, time: obj }]);
        });
      });

      //Herunder tager vi vores nye data i allClasses + classSelection og sorterer det i deres "time.start" tidspunkt.
      //Derved får vi dem rykket rundt til at ligge i rækkefølge fra tidligste start tid til seneste
      setAllClasses((old) => old.sort((a, b) => a.time.start - b.time.start));
      setClassSelection((old) => old.sort((a, b) => a.time.start - b.time.start));

      //For at få filtreret vores data til kun at have den valgte dags hold, skal vi oversætte chosenDayNumber.
      //Den viser nemlig kun dagen i et tal, hvor søndag=0 og lørdag=6
      const dayNames = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"];
      const today = dayNames[chosenDayNumber];
      setClassSelection((old) => old.filter((item) => item.time.weekday === today));

      //Her filtrer vi en sidste gang, denne gang for det valgte hold. Dette er kun hvis det ikke er alle hold (all-class) der er valgt
      if (chosenClass !== "all-class") {
        setAllClasses((old) => old.filter((item) => item.title === chosenClass));
        setClassSelection((old) => old.filter((item) => item.title === chosenClass));
      }
    }
    showClasses();
  }, [chosenCategory, chosenDayNumber, chosenClass]);

  function styleTimes(times) {
    let newTime;
    if (times < 999) {
      const addZero = "0" + times;
      const time = addZero.split("");
      newTime = time[0] + time[1] + ":" + time[2] + time[3];
    } else {
      const time = times + "";
      newTime = time[0] + time[1] + ":" + time[2] + time[3];
    }
    return newTime;
  }

  return (
    <>
      <main className={styles.main}>
        <header className={styles.header}>hello im a test header</header>
        <article className={styles.class_overview}>
          <FilteringSection chosenCategory={chosenCategory} setChosenCategory={setChosenCategory} chosenClass={chosenClass} setChosenClass={setChosenClass} />
          <div className={styles.week_overview}>
            <ArrowBtn
              direction="left"
              onClick={() => {
                setWeekNumber((old) => old - 1);
              }}
            />
            <p>
              Uge <span>{weekNumber}</span>
            </p>
            <ArrowBtn
              direction="right"
              onClick={() => {
                setWeekNumber((old) => old + 1);
              }}
            />
          </div>
          <section className={styles.day_section}>
            <DayRadio day="Mandag" setChosenDayNumber={setChosenDayNumber} chosenDayNumber={chosenDayNumber} allClasses={allClasses} classSelection={classSelection} />
            <DayRadio day="Tirsdag" setChosenDayNumber={setChosenDayNumber} chosenDayNumber={chosenDayNumber} allClasses={allClasses} classSelection={classSelection} />
            <DayRadio day="Onsdag" setChosenDayNumber={setChosenDayNumber} chosenDayNumber={chosenDayNumber} allClasses={allClasses} classSelection={classSelection} />
            <DayRadio day="Torsdag" setChosenDayNumber={setChosenDayNumber} chosenDayNumber={chosenDayNumber} allClasses={allClasses} classSelection={classSelection} />
            <DayRadio day="Fredag" setChosenDayNumber={setChosenDayNumber} chosenDayNumber={chosenDayNumber} allClasses={allClasses} classSelection={classSelection} />
            <DayRadio day="Lørdag" setChosenDayNumber={setChosenDayNumber} chosenDayNumber={chosenDayNumber} allClasses={allClasses} classSelection={classSelection} />
            <DayRadio day="Søndag" setChosenDayNumber={setChosenDayNumber} chosenDayNumber={chosenDayNumber} allClasses={allClasses} classSelection={classSelection} />
          </section>
          <section>
            <section className={styles.classview_example}>
              {" "}
              <p>Tidsrum</p>
              <p>Hold</p>
              <p>Instruktør</p>
              <p>Lokale</p>
            </section>

            {classSelection.length > 0 ? (
              classSelection.map((item) => {
                const newStart = styleTimes(item.time.start);
                console.log(newStart);
                const newEnd = styleTimes(item.time.end);
                const uniqueId = Math.random();
                return <ClassItem key={uniqueId} classtitle={item.title} coach={item.trainer} time={newStart + "-" + newEnd} location={item.location} chosenClassItem={chosenClassItem} setChosenClassItem={setChosenClassItem} />;
              })
            ) : (
              <section className={styles.noClasses}>
                <p>Der fremgår ingen hold denne dag. Vælg venligst en anden dag.</p>
              </section>
            )}

            {chosenClassItem !== "" && (
              <section className={styles.mobile_btn_section}>
                <div className={styles.flex}>
                  <LinkBtn href="/" text="Tilmeld" variant="primary" />
                </div>
              </section>
            )}
          </section>
        </article>
        <footer className={styles.footer}>hello im a test footer</footer>
      </main>
    </>
  );
}
