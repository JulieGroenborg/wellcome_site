"use client";
import { useState } from "react";
import styles from "./holdplan.module.scss";
import LinkBtn from "../components/global/LinkBtn";
import ClassItem from "../components/holdplan/ClassItem";

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
  const [chosenClassItem, setChosenClassItem] = useState("");

  console.log("this is the chosen", chosenClassItem);

  return (
    <>
      <main className={styles.main}>
        {/* <section className={styles.day_section}>
          <DayRadio day="mandag" setChosen={setChosenDay} />
          <DayRadio day="tirsdag" setChosen={setChosenDay} />
          <DayRadio day="onsdag" setChosen={setChosenDay} />
          <DayRadio day="torsdag" setChosen={setChosenDay} />
          <DayRadio day="fredag" setChosen={setChosenDay} />
          <DayRadio day="lørdag" setChosen={setChosenDay} />
          <DayRadio day="søndag" setChosen={setChosenDay} />
        </section> */}
        <article className={styles.class_overview}>
          <article>
            <ClassItem classtitle="Nordic Strong Power" coach="Michael Andersen" time="13:45-11:00" location="CrossTraining" chosenClassItem={chosenClassItem} setChosenClassItem={setChosenClassItem} />
            <ClassItem classtitle="Mindfull stræk og afspænding" coach="Frederik Tønder-Prien" time="13:45-11:00" location="CrossTraining" chosenClassItem={chosenClassItem} setChosenClassItem={setChosenClassItem} />
            <ClassItem classtitle="Boldmassage af bindevævet" coach="Christina Præstkær" time="13:45-11:00" location="CrossTraining" chosenClassItem={chosenClassItem} setChosenClassItem={setChosenClassItem} />
            <ClassItem classtitle="Nordic Strong Powe" coach="Michael Andersen" time="13:45-11:00" location="CrossTraining" chosenClassItem={chosenClassItem} setChosenClassItem={setChosenClassItem} />
            <ClassItem classtitle="Mindfull stræk og afspændin" coach="Frederik Tønder-Prien" time="13:45-11:00" location="CrossTraining" chosenClassItem={chosenClassItem} setChosenClassItem={setChosenClassItem} />
            <ClassItem classtitle="Boldmassage af bindevævt" coach="Christina Præstkær" time="13:45-11:00" location="CrossTraining" chosenClassItem={chosenClassItem} setChosenClassItem={setChosenClassItem} />
            <ClassItem classtitle="Nordic Strong Pwer" coach="Michael Andersen" time="13:45-11:00" location="CrossTraining" chosenClassItem={chosenClassItem} setChosenClassItem={setChosenClassItem} />
            <ClassItem classtitle="Mindfull stræk o afspænding" coach="Frederik Tønder-Prien" time="13:45-11:00" location="CrossTraining" chosenClassItem={chosenClassItem} setChosenClassItem={setChosenClassItem} />
            <ClassItem classtitle="Boldmassae af bindevævet" coach="Christina Præstkær" time="13:45-11:00" location="CrossTraining" chosenClassItem={chosenClassItem} setChosenClassItem={setChosenClassItem} />
          </article>
          {chosenClassItem !== "" && (
            <section className={styles.mobile_btn_section}>
              <LinkBtn href="/" text="Tilmeld" variant="primary" />
            </section>
          )}
        </article>
        <footer className={styles.footer}>hello</footer>
      </main>
    </>
  );
}
