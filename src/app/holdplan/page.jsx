"use client";
import { useState } from "react";
import styles from "./holdplan.module.scss";
import LinkBtn from "../components/global/LinkBtn";
import DayRadio from "../components/holdplan/DayRadio";
import ClassItem from "../components/holdplan/ClassItem";
import ArrowBtn from "../components/global/ArrowBtn";

//API url: https://hovludcpqudqvcqteblj.supabase.co/rest/v1/Hold
//API key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhvdmx1ZGNwcXVkcXZjcXRlYmxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwMzI4MzEsImV4cCI6MjAyOTYwODgzMX0.5K-wz_oerFZ5hmvUq0IOPgJHn0e1sRYh57y_8pFqnKk

// let headersList = {
//   apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhvdmx1ZGNwcXVkcXZjcXRlYmxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwMzI4MzEsImV4cCI6MjAyOTYwODgzMX0.5K-wz_oerFZ5hmvUq0IOPgJHn0e1sRYh57y_8pFqnKk",
//   Prefer: "return=representation",
// };

// let response = await fetch("https://hovludcpqudqvcqteblj.supabase.co/rest/v1/Hold", {
//   method: "GET",
//   headers: headersList,
// });

// let data = await response.json();

// console.log(data);

export default function Holdplan() {
  const [chosenDay, setChosenDay] = useState(); //State til at vide hvilken dag er valgt til senere brug i koden ;-)
  const [weekNumber, setWeekNumber] = useState(21); //State til at vide hvilken uge der vises

  const [chosenClassItem, setChosenClassItem] = useState(""); //State til at vide hvilket hold, der er valgt

  return (
    <>
      <main className={styles.main}>
        <article className={styles.class_overview}>
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
