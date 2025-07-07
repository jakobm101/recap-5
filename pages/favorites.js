import Gallery__Images__List from "@/components/Gallery/Gallery__Images__List";

export default function Favorites({
  data,
  isLoading,
  toggleFavorite,
  favorites,
}) {
  if (data && favorites) {
    const favoritesData = data.filter(
      (img) => favorites?.find((fav) => fav.id === img.slug)?.isFav
    );

    return (
      <main>
        <h1> Favorites </h1>
        {!isLoading || <h2> is loading</h2>}
        {data && data.length > 0 && (
          <Gallery__Images__List
            data={favoritesData}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        )}
      </main>
    );
  } else {
    return "Loading Favorites";
  }
}
