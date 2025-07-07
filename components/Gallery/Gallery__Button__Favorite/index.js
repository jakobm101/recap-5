export default function Gallery__Button__Favorite({
  id,
  toggleFavorite,
  favorites,
}) {
  return (
    <>
      <button onClick={() => toggleFavorite(id)}>
        Favorite {favorites?.find((fav) => fav.id === id)?.isFav ? "📗" : "📓"}
      </button>
    </>
  );
}
