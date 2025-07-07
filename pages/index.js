import Spotlight from "@/components/Gallery/Gallery__Spotlight";
import { useRouter } from "next/router";

export default function Homepage({
  data,
  isLoading,
  toggleFavorite,
  favorites,
}) {
  const router = useRouter();
  const randomIndex = (array = []) => {
    const length = array.length;
    return Math.floor(Math.random() * length);
  };
  const index = randomIndex(data);

  return (
    <div>
      <h1> Spotlight </h1>
      {!isLoading || <h2> is loading</h2>}
      {data && data.length > 0 && (
        <Spotlight
          isLoading={isLoading}
          image={data[index]}
          toggleFavorite={toggleFavorite}
          favorites={favorites}
          onClick={() => router.push(`/art-pieces/${data[index].slug}`)}
        />
      )}
    </div>
  );
}
