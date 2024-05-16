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
  const [selectValues, setSelectValues] = useState(""); //State der indeholder de hold, der vises i hold filtreringen
  const [chosenClassItem, setChosenClassItem] = useState(""); //State til at vide hvilket hold, der er valgt i kalenderen
  const [weekNumber, setWeekNumber] = useState(21); //State til at vide hvilken uge der vises
  const [chosenDay, setChosenDay] = useState(new Date().getDay()); //State til at vide hvilken dag er valgt
  const [allClasses, setAllClasses] = useState([]);
  const [classSelection, setClassSelection] = useState();

  //console.log("category ", chosenCategory, "class ", chosenClass);
  // const dayNames = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"];
  // const today = dayNames[chosenDay];
  //console.log(today);

  useEffect(() => {
    async function showClasses() {
      /** Hvis chosenCategory er sat til en kategori, skal der kun fetches hold indenfor kategorien */
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
      //setClassSelection(data);

      //Her map'er vi over vores data, og ved hvert hold (item) map'er vi igen i deres "time" data (det array med objekter for hvert tidspunkt holdet afholdes)
      //Vi opdaterer allClasses statet til at indeholde en ny version af vores fetchede data. Her putter vi holdene ind for hver gang de skal optræde på planen
      //Derved får vi et array i allClasses, hvor alle de tilgængelige hold (indenfor filtreringen) der skal fremtræde på planen
      data.map((item) => {
        item.time.map((obj) => {
          setAllClasses((allClasses) => [...allClasses, { title: item.title, trainer: item.trainer, location: item.location, time: obj }]);
        });
      });
      //Herunder tager vi vores nye data fra allClasses og sorterer det i deres "time.start" tidspunkt.
      //Derved får vi dem rykket rundt til at ligge i rækkefølge fra tidligste start tid til seneste
      setAllClasses((old) => old.sort((a, b) => a.time.start - b.time.start));

      const dayNames = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"];
      const today = dayNames[chosenDay];
      setAllClasses((old) => old.filter((item) => item.time.weekday === today));

      // console.log(test.sort((a, b) => a.no - b.no));
      // const startTimes = data.flatMap((item) => {
      //   item.time.map((obj) => {
      //     obj.start;
      //   });
      // });
      // setStartTime(startTimes);
      // data.map((item) => {
      //   console.log(item.time[0].start);
      // });
      // const startTimes = data.flatMap((item) => {
      //   item.time.map((obj) => {
      //     // obj.start;
      //     console.log(obj.start, item.title);
      //   });
      // });
    }
    showClasses();
  }, [chosenCategory, chosenDay]);
  console.log(allClasses);
  //const dayFilter = allClasses.filter((clas) => clas.time.weekday === "Mandag");
  //console.log(dayFilter);
  // const allClassesSorted = allClasses && allClasses.sort((a, b) => a.time.start - b.time.start);
  // console.log(allClassesSorted);
  //console.log(allClasses);
  // function findStartTimes() {
  //   const startTimes = classSelection && classSelection.flatMap((item) => item.time.map((obj) => obj.start));
  //   setStartTime(startTimes);
  //   console.log(startTime);
  //}
  // findStartTimes();
  //const test = [{ no: 10 }, { no: 8 }, { no: 9 }];
  // function compareNumbers(a, b) {
  //   return a - b;
  // }

  // console.log(
  //   test.sort((a, b) => a.no - b.no),
  //   test
  // );

  return (
    <>
      <main className={styles.main}>
        <header className={styles.header}>hello im a test header</header>
        <article className={styles.class_overview}>
          <FilteringSection chosenCategory={chosenCategory} setChosenCategory={setChosenCategory} chosenClass={chosenClass} setChosenClass={setChosenClass} selectValues={selectValues} setSelectValues={setSelectValues} />
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
            <DayRadio day="Mandag" setChosenDay={setChosenDay} chosenDay={chosenDay} />
            <DayRadio day="Tirsdag" setChosenDay={setChosenDay} chosenDay={chosenDay} />
            <DayRadio day="Onsdag" setChosenDay={setChosenDay} chosenDay={chosenDay} />
            <DayRadio day="Torsdag" setChosenDay={setChosenDay} chosenDay={chosenDay} />
            <DayRadio day="Fredag" setChosenDay={setChosenDay} chosenDay={chosenDay} />
            <DayRadio day="Lørdag" setChosenDay={setChosenDay} chosenDay={chosenDay} />
            <DayRadio day="Søndag" setChosenDay={setChosenDay} chosenDay={chosenDay} />
          </section>
          <section>
            <section className={styles.classview_example}>
              {" "}
              <p>Tidsrum</p>
              <p>Hold</p>
              <p>Instruktør</p>
              <p>Lokale</p>
            </section>

            {allClasses &&
              allClasses.map((item) => {
                const uniqueId = Math.random();
                return <ClassItem key={uniqueId} classtitle={item.title} coach={item.trainer} time={item.time.start} location={item.location} chosenClassItem={chosenClassItem} setChosenClassItem={setChosenClassItem} />;
                //console.log("1st map");
                // item.time.map((obj) => {
                //   const uniqueId = Math.random();
                //   console.log(obj.start, item.title);
                //   return <p key={uniqueId}>hallo</p>;
                // });
              })}

            {/* {classSelection &&
              classSelection.map((item) => {
                const uniqueId = Math.random();
                item.time.map((obj) => {
                  console.log(obj.start);
                  return <p key={uniqueId}>hallo</p>;
                });
                //console.log("1st map");
                // item.time.map((obj) => {
                //   const uniqueId = Math.random();
                //   console.log(obj.start, item.title);
                //   return <p key={uniqueId}>hallo</p>;
                // });
              })} */}
            {/* <ClassItem classtitle="Nordic Strong Power" coach="Michael Andersen" time="13:45-11:00" location="CrossTraining" chosenClassItem={chosenClassItem} setChosenClassItem={setChosenClassItem} />
            <ClassItem classtitle="Mindfull stræk & afspænding" coach="Frederik Tønder-Prien" time="00:00-00:00" location="Cross" chosenClassItem={chosenClassItem} setChosenClassItem={setChosenClassItem} />
            <ClassItem classtitle="Boldma" coach="Christina Præstkær" time="13:45-11:00" location="CrossTraining" chosenClassItem={chosenClassItem} setChosenClassItem={setChosenClassItem} />
            <ClassItem classtitle="Nordic Strong Powe" coach="Michael Andersen" time="13:45-11:00" location="CrossTraining" chosenClassItem={chosenClassItem} setChosenClassItem={setChosenClassItem} />
            <ClassItem classtitle="Mindfull stræk og afspændin" coach="Frederik Tønder-Prien" time="13:45-11:00" location="CrossTraining" chosenClassItem={chosenClassItem} setChosenClassItem={setChosenClassItem} />
            <ClassItem classtitle="Boldmassage af bindevævt" coach="Christina Præstkær" time="13:45-11:00" location="CrossTraining" chosenClassItem={chosenClassItem} setChosenClassItem={setChosenClassItem} />
            <ClassItem classtitle="Nordic Strong Pwer" coach="Michael Andersen" time="13:45-11:00" location="CrossTraining" chosenClassItem={chosenClassItem} setChosenClassItem={setChosenClassItem} />
            <ClassItem classtitle="Mindfull stræk o afspænding" coach="Frederik Tønder-Prien" time="13:45-11:00" location="CrossTraining" chosenClassItem={chosenClassItem} setChosenClassItem={setChosenClassItem} />
            <ClassItem classtitle="Boldmassae af bindevævet" coach="Christina Præstkær" time="13:45-11:00" location="CrossTraining" chosenClassItem={chosenClassItem} setChosenClassItem={setChosenClassItem} />
            <ClassItem classtitle="Mindfll stræk o afspænding" coach="Frederik Tønder-Prien" time="13:45-11:00" location="CrossTraining" chosenClassItem={chosenClassItem} setChosenClassItem={setChosenClassItem} />
            <ClassItem classtitle="Boldmssae af bindevævet" coach="Christina Præstkær" time="13:45-11:00" location="CrossTraining" chosenClassItem={chosenClassItem} setChosenClassItem={setChosenClassItem} /> */}
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
