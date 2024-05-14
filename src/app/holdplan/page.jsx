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
  const [chosenDay, setChosenDay] = useState(); //State til at vide hvilken dag er valgt

  console.log("category ", chosenCategory, "class ", chosenClass);
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
            <DayRadio day="mandag" setChosenDay={setChosenDay} />
            <DayRadio day="tirsdag" setChosenDay={setChosenDay} />
            <DayRadio day="onsdag" setChosenDay={setChosenDay} />
            <DayRadio day="torsdag" setChosenDay={setChosenDay} />
            <DayRadio day="fredag" setChosenDay={setChosenDay} />
            <DayRadio day="lørdag" setChosenDay={setChosenDay} />
            <DayRadio day="søndag" setChosenDay={setChosenDay} />
          </section>
          <section>
            <section className={styles.classview_example}>
              {" "}
              <p>Tidsrum</p>
              <p>Hold</p>
              <p>Instruktør</p>
              <p>Lokale</p>
            </section>
            <ClassItem classtitle="Nordic Strong Power" coach="Michael Andersen" time="13:45-11:00" location="CrossTraining" chosenClassItem={chosenClassItem} setChosenClassItem={setChosenClassItem} />
            <ClassItem classtitle="Mindfull stræk & afspænding" coach="Frederik Tønder-Prien" time="00:00-00:00" location="Cross" chosenClassItem={chosenClassItem} setChosenClassItem={setChosenClassItem} />
            <ClassItem classtitle="Boldma" coach="Christina Præstkær" time="13:45-11:00" location="CrossTraining" chosenClassItem={chosenClassItem} setChosenClassItem={setChosenClassItem} />
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
