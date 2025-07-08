export default function Gallery__Button__Favorite({
  id,
  toggleFavorite,
  favorites,
  className
}) {
  return (
    <>
      <button className={className} onClick={() => toggleFavorite(id)}>
        {favorites?.find((fav) => fav.id === id)?.isFav ? "📗" : "📓"} Favor
      </button>
    </>
  );
}
