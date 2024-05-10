import "./kategori.scss";
import CategoryCard from "../components/kategoriside/CategoryCard";

export default function kategorier() {
  return (
    <>
      <main>
        <section className="card_container">
          <div className="flex_cards">
            <CategoryCard category="indoor_cycling" title="Wellcome indoor cycling" href="noget"></CategoryCard>
            <CategoryCard category="energy" title="Wellcome energy" href="noget"></CategoryCard>
            <CategoryCard category="functional" title="Wellcome functional" href="noget"></CategoryCard>
            <CategoryCard category="heat" title="Wellcome heat" href="noget"></CategoryCard>
          </div>
          <div className="flex_cards">
            <CategoryCard category="nordic_strong" title="Wellcome nordic strong" href="noget"></CategoryCard>
            <CategoryCard category="pleasure" title="Wellcome pleasure" href="noget"></CategoryCard>
            <CategoryCard category="body_mind" title="Wellcome body mind" href="noget"></CategoryCard>
            <CategoryCard category="reformer" title="Wellcome reformer" href="noget"></CategoryCard>
          </div>
        </section>
      </main>
    </>
  );
}
