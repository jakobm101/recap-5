import Gallery__Images__List from "@/components/Gallery/Gallery__Images__List";

export default function Favorites({
  data,
  isLoading,
  toggleFavorite,
  favorites,
}) {
  if (data) {
    const favoritesData = data?.filter((image) => {
      favorites?.find((fav) => fav?.id === image.slug);
    });
    console.log(data[0].slug);
    console.log(favorites);

    console.log("fav data", favoritesData);
    console.log(
      "isFav",
      favorites?.filter((fav) => fav.isFav)
    );

    return (
      <div>
        <h1> Favorites </h1>
        {!isLoading || <h2> is loading</h2>}
        {data && data.length > 0 && (
          <Gallery__Images__List
            data={favoritesData}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        )}
      </div>
    );
  } else {
    return "Loading Favorites";
  }
}
