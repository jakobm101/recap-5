import Gallery__Images__List from "@/components/Gallery/Gallery__Images__List";
import Link from "next/link";

export default function Favorites({
  data,
  isLoading,
  toggleFavorite,
  favorites,
}) {

  if (isLoading) return <h1>Loading</h1>;
  const favoritesData = data.filter(
    (img) => favorites?.find((fav) => fav.id === img.slug)?.isFav
  );
  console.log(favorites.find(fav => fav.isFav));
  
  
  return (
    <main>
      <h1> Favorites </h1>
      <Gallery__Images__List
        data={favoritesData}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
      { !(favorites?.find(fav => fav.isFav)) && (
        <article className={'favorites__none'}>
          <h2> No Favorites yet</h2>
          <p>Add some pieces in the gallery</p>
        <Link href={'/art-pieces'}>Gallery</Link>
        </article>
      )}
    </main>
  );
}
