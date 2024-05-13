export default async function hold({ searchParams }) {
  // FUNKTIONEN BAG KATEGORI-CARD: vi kan se, at der ovenfor bliver sendt et parameter "searchParams" ned til hold-siden. Nedenfor console logger vi "searchParams.category", som vi være lig med den kategory der er klikket på. I vores fetch-kald, sørger vi for at benytte url + specifik paramter ("${searchParams.category}"), for at hente al data fra databasen med pågældende category-navn.
  console.log("Dette er searchParams", searchParams.category);
  let headersList = {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhvdmx1ZGNwcXVkcXZjcXRlYmxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwMzI4MzEsImV4cCI6MjAyOTYwODgzMX0.5K-wz_oerFZ5hmvUq0IOPgJHn0e1sRYh57y_8pFqnKk",
    Prefer: "return=representation",
  };

  let response = await fetch(`https://hovludcpqudqvcqteblj.supabase.co/rest/v1/Hold?category=eq.${searchParams.category}`, {
    method: "GET",
    headers: headersList,
  });

  let data = await response.json();

  console.log("dette er data", data);

  return (
    <>
      <main>
        {data.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </main>
    </>
  );
}
