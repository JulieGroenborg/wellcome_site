"use client";
import { useState, useEffect } from "react";
import styles from "./holdplan.module.scss";
import LinkBtn from "../components/global/LinkBtn";
import DayRadio from "../components/holdplan/DayRadio";
import ClassItem from "../components/holdplan/ClassItem";
import ArrowBtn from "../components/global/ArrowBtn";

//API url: https://hovludcpqudqvcqteblj.supabase.co/rest/v1/Hold
//API key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhvdmx1ZGNwcXVkcXZjcXRlYmxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwMzI4MzEsImV4cCI6MjAyOTYwODgzMX0.5K-wz_oerFZ5hmvUq0IOPgJHn0e1sRYh57y_8pFqnKk

export default function Holdplan() {
  const [chosenCategory, setChosenCategory] = useState("all-categories"); //State til at vide hvilken kategori, der filtreres efter
  const [weekNumber, setWeekNumber] = useState(21); //State til at vide hvilken uge der vises
  const [chosenDay, setChosenDay] = useState(); //State til at vide hvilken dag er valgt
  const [chosenClassItem, setChosenClassItem] = useState(""); //State til at vide hvilket hold, der er valgt
  const [selectValues, setSelectValues] = useState(); //State til at styre hvilke hold, der vises i hold filtreringen

  //Hver gang chosenCategory bliver ændret, vil der blive fetchet alle de hold, der hører til den valgte kategori
  useEffect(() => {
    async function showCategory() {
      /** Hvis chosenCategory er sat til en kategori, skal der kun fetches hold indenfor kategorien */
      const filteringParamters = chosenCategory !== "all-categories" ? `?category=eq.${chosenCategory}` : "";

      let headersList = {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhvdmx1ZGNwcXVkcXZjcXRlYmxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwMzI4MzEsImV4cCI6MjAyOTYwODgzMX0.5K-wz_oerFZ5hmvUq0IOPgJHn0e1sRYh57y_8pFqnKk",
        Prefer: "return=representation",
      };

      let response = await fetch(`https://hovludcpqudqvcqteblj.supabase.co/rest/v1/Hold${filteringParamters}`, {
        method: "GET",
        headers: headersList,
      });

      let data = await response.json();
      setSelectValues(data);
    }
    showCategory();
  }, [chosenCategory]);

  return (
    <>
      <main className={styles.main}>
        <article className={styles.class_overview}>
          <div className={styles.category_select_wrapper}>
            <select onChange={(e) => setChosenCategory(e.target.value)} value={chosenCategory} name="category_filter" id="category_filter" className={styles.category_select}>
              <option value="all-categories">Alle kategorier</option>
              <option value="Energy">Welcome Energy</option>
              <option value="Body-mind">Welcome Body Mind</option>
              <option value="Heat">Welcome Heat</option>
              <option value="Reformer">Welcome Reformer</option>
              <option value="Nordic-strong">Welcome Nordic Strong</option>
              <option value="Functional">Welcome Functional</option>
              <option value="Indoor-cycling">Welcome Cycling</option>
              <option value="Pleasure">Welcome Pleasure</option>
            </select>
          </div>
          {chosenCategory !== "all-categories" && (
            <div className={styles.class_select_wrapper}>
              <select name="class_filter" id="class_filter" className={styles.class_select}>
                <option value="all_classes">Alle hold</option>
                {selectValues &&
                  selectValues.map((item) => {
                    return (
                      <option value={item.title} key={item.id}>
                        {item.title}
                      </option>
                    );
                  })}
              </select>
            </div>
          )}
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
            <DayRadio day="mandag" setChosenDay={setChosenDay} />
            <DayRadio day="tirsdag" setChosenDay={setChosenDay} />
            <DayRadio day="onsdag" setChosenDay={setChosenDay} />
            <DayRadio day="torsdag" setChosenDay={setChosenDay} />
            <DayRadio day="fredag" setChosenDay={setChosenDay} />
            <DayRadio day="lørdag" setChosenDay={setChosenDay} />
            <DayRadio day="søndag" setChosenDay={setChosenDay} />
          </section>
          <section>
            <ClassItem classtitle="Nordic Strong Power" coach="Michael Andersen" time="13:45-11:00" location="CrossTraining" chosenClassItem={chosenClassItem} setChosenClassItem={setChosenClassItem} />
            <ClassItem classtitle="Mindfull stræk og afspænding" coach="Frederik Tønder-Prien" time="13:45-11:00" location="CrossTraining" chosenClassItem={chosenClassItem} setChosenClassItem={setChosenClassItem} />
            <ClassItem classtitle="Boldmassage af bindevævet" coach="Christina Præstkær" time="13:45-11:00" location="CrossTraining" chosenClassItem={chosenClassItem} setChosenClassItem={setChosenClassItem} />
            <ClassItem classtitle="Nordic Strong Powe" coach="Michael Andersen" time="13:45-11:00" location="CrossTraining" chosenClassItem={chosenClassItem} setChosenClassItem={setChosenClassItem} />
            <ClassItem classtitle="Mindfull stræk og afspændin" coach="Frederik Tønder-Prien" time="13:45-11:00" location="CrossTraining" chosenClassItem={chosenClassItem} setChosenClassItem={setChosenClassItem} />
            <ClassItem classtitle="Boldmassage af bindevævt" coach="Christina Præstkær" time="13:45-11:00" location="CrossTraining" chosenClassItem={chosenClassItem} setChosenClassItem={setChosenClassItem} />
            <ClassItem classtitle="Nordic Strong Pwer" coach="Michael Andersen" time="13:45-11:00" location="CrossTraining" chosenClassItem={chosenClassItem} setChosenClassItem={setChosenClassItem} />
            <ClassItem classtitle="Mindfull stræk o afspænding" coach="Frederik Tønder-Prien" time="13:45-11:00" location="CrossTraining" chosenClassItem={chosenClassItem} setChosenClassItem={setChosenClassItem} />
            <ClassItem classtitle="Boldmassae af bindevævet" coach="Christina Præstkær" time="13:45-11:00" location="CrossTraining" chosenClassItem={chosenClassItem} setChosenClassItem={setChosenClassItem} />
            <ClassItem classtitle="Mindfll stræk o afspænding" coach="Frederik Tønder-Prien" time="13:45-11:00" location="CrossTraining" chosenClassItem={chosenClassItem} setChosenClassItem={setChosenClassItem} />
            <ClassItem classtitle="Boldmssae af bindevævet" coach="Christina Præstkær" time="13:45-11:00" location="CrossTraining" chosenClassItem={chosenClassItem} setChosenClassItem={setChosenClassItem} />
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
