export default function Gallery__Button__Favorite({
  id = "no id",
  setFavorite = () => {},
}) {
  return (
    <>
      {/* to do: PROP DRILL */}
      <button onClick={() => setFavorite(id)}>Favorite</button>
    </>
  );
}
