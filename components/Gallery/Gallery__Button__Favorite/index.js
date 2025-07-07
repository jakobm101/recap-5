export default function Gallery__Button__Favorite({
  id = "2",
  toggleFavorite,
  favorites,
}) {
  return (
    <>
      {/* to do: PROP DRILL */}
      <button onClick={() => toggleFavorite(id)}>Favorite {favorites.find(fav => fav.id === id)?.isFav ? '📗': '📓'}</button>
    </>
  );
}
