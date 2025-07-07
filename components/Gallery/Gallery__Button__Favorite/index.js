export default function Gallery__Button__Favorite({
  id,
  toggleFavorite,
  favorites,
  className
}) {
  return (
    <>
      <button className={className} onClick={() => toggleFavorite(id)}>
        Favorite {favorites?.find((fav) => fav.id === id)?.isFav ? "📗" : "📓"}
      </button>
    </>
  );
}
