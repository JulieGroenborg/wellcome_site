"use client";
import { useState, useEffect } from "react";
import styles from "./holdplan.module.scss";
import DayRadio from "@/app/components/holdplan/DayRadio";

//API url: https://hovludcpqudqvcqteblj.supabase.co/rest/v1/Hold
//API key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhvdmx1ZGNwcXVkcXZjcXRlYmxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwMzI4MzEsImV4cCI6MjAyOTYwODgzMX0.5K-wz_oerFZ5hmvUq0IOPgJHn0e1sRYh57y_8pFqnKk

export default function Holdplan() {
  const [chosenDay, setChosenDay] = useState(); //State til at vide hvilken dag er valgt til senere brug i koden ;-)
  const [chosenCategory, setChosenCategory] = useState("all-categories"); //State til at vide hvilken kategori, der filtreres efter
  const [showTeams, setShowTeams] = useState();

  //Hver gang chosenCategory bliver ændret, vil der blive fetchet alle de hold, der hører til den valgte kategori
  useEffect(() => {
    chosenCategory === "all-categories" ? showAllCategories() : showCategory();
    async function showCategory() {
      let headersList = {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhvdmx1ZGNwcXVkcXZjcXRlYmxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwMzI4MzEsImV4cCI6MjAyOTYwODgzMX0.5K-wz_oerFZ5hmvUq0IOPgJHn0e1sRYh57y_8pFqnKk",
        Prefer: "return=representation",
      };

      let response = await fetch(`https://hovludcpqudqvcqteblj.supabase.co/rest/v1/Hold?category=eq.${chosenCategory}`, {
        method: "GET",
        headers: headersList,
      });

      let data = await response.json();
      setShowTeams(data);
    }
    async function showAllCategories() {
      let headersList = {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhvdmx1ZGNwcXVkcXZjcXRlYmxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwMzI4MzEsImV4cCI6MjAyOTYwODgzMX0.5K-wz_oerFZ5hmvUq0IOPgJHn0e1sRYh57y_8pFqnKk",
        Prefer: "return=representation",
      };

      let response = await fetch(`https://hovludcpqudqvcqteblj.supabase.co/rest/v1/Hold`, {
        method: "GET",
        headers: headersList,
      });

      let data = await response.json();

      //console.log(data);
    }
  }, [chosenCategory]);

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
              {showTeams &&
                showTeams.map((team) => {
                  return (
                    <option value={team.title} key={team.id}>
                      {team.title}
                    </option>
                  );
                })}
            </select>
          </div>
        )}
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
