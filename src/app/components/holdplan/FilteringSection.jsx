"use client";
import { useEffect } from "react";
import styles from "./FilteringSection.module.scss";
import FilteringRadio from "./FilteringRadio";

export default function FilteringSection({ chosenCategory, setChosenCategory, selectValues, setSelectValues }) {
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
  }, [chosenCategory, setSelectValues]);

  return (
    <>
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
      <section className={styles.category_radio_wrapper}>
        <FilteringRadio id="all-categories" name="category_filters" label="Alle kategorier" color="white" setChosenCategory={setChosenCategory} checked={true} />
        <FilteringRadio id="Energy" name="category_filters" label="Wellcome Energy" color="white" setChosenCategory={setChosenCategory} />
        <FilteringRadio id="Body-mind" name="category_filters" label="Wellcome Body Mind" color="white" setChosenCategory={setChosenCategory} />
        <FilteringRadio id="Heat" name="category_filters" label="Wellcome Heat" color="white" setChosenCategory={setChosenCategory} />
        <FilteringRadio id="Reformer" name="category_filters" label="Wellcome Reformer" color="white" setChosenCategory={setChosenCategory} />
        <FilteringRadio id="Nordic-strong" name="category_filters" label="Wellcome Nordic Strong" color="white" setChosenCategory={setChosenCategory} />
        <FilteringRadio id="Functional" name="category_filters" label="Wellcome Functional" color="white" setChosenCategory={setChosenCategory} />
        <FilteringRadio id="Indoor-cycling" name="category_filters" label="Wellcome Indoor Cycling" color="white" setChosenCategory={setChosenCategory} />
        <FilteringRadio id="Pleasure" name="category_filters" label="Wellcome Pleasure" color="white" setChosenCategory={setChosenCategory} />
      </section>
      <section className={styles.class_radio_wrapper}>
        <FilteringRadio id="all-categories" name="class_filters" label="Alle kategorier" color="black" setChosenCategory={setChosenCategory} checked={true} />
      </section>
    </>
  );
}