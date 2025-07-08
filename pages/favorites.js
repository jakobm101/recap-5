import Gallery__Images__List from "@/components/Gallery/Gallery__Images__List";

export default function Favorites({
  data,
  isLoading,
  toggleFavorite,
  favorites,
}) {
  if (isLoading) return <h1>Loading</h1>;
  const favoritesData = data.filter(
    (img) => favorites?.find((fav) => fav.id === img.slug)?.isFav
  );
  return (
    <main>
      <h1> Favorites </h1>
      <Gallery__Images__List
        data={favoritesData}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
    </main>
  );
}
