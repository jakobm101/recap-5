export default function Gallery__Button__Favorite({
  id = "2",
  toggleFavorite 
}) {
  return (
    <>
      {/* to do: PROP DRILL */}
      <button onClick={() => toggleFavorite(id)}>Favorite</button>
    </>
  );
}
