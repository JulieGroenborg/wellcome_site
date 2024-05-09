"use client";
import { useState } from "react";
import styles from "./holdplan.module.scss";
import DayRadio from "@/app/components/holdplan/DayRadio";

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
  const [chosenDay, setChosenDay] = useState();
  console.log(chosenDay);
  return (
    <>
      <main>
        <section className={styles.day_section}>
          <DayRadio day="mandag" setChosen={setChosenDay} />
          <DayRadio day="tirsdag" setChosen={setChosenDay} />
          <DayRadio day="onsdag" setChosen={setChosenDay} />
          <DayRadio day="torsdag" setChosen={setChosenDay} />
          <DayRadio day="fredag" setChosen={setChosenDay} />
          <DayRadio day="lørdag" setChosen={setChosenDay} />
          <DayRadio day="søndag" setChosen={setChosenDay} />
        </section>
      </main>
    </>
  );
}
