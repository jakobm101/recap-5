import Gallery__Images__List from "@/components/Gallery/Gallery__Images__List";

export default function ArtPieces({
  data,
  isLoading,
  favorites,
  toggleFavorite,
}) {
  return (
    <div>
      <h1> Gallery </h1>
      {!isLoading || <h2> is loading</h2>}
      <Gallery__Images__List
        data={data}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
}
