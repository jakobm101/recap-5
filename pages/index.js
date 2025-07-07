import Spotlight from "@/components/Gallery/Gallery__Spotlight";

export default function Homepage({
  data,
  isLoading,
  toggleFavorite,
  favorites,
}) {
  const randomIndex = (array = []) => {
    const length = array.length;
    return Math.floor(Math.random() * length);
  };

  return (
    <div>
      <h1> Spotlight </h1>
      {!isLoading || <h2> is loading</h2>}
      {data && data.length > 0 && (
        <Spotlight
          isLoading={isLoading}
          image={data[randomIndex(data)]}
          toggleFavorite={toggleFavorite}
          favorites={favorites}
        />
      )}
    </div>
  );
}
