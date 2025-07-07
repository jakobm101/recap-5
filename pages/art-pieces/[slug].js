import { useRouter } from "next/router";
import Image from "next/image";
import Gallery__Button__Favorite from "@/components/Gallery/Gallery__Button__Favorite";
import useLocalStorage from "use-local-storage";
import Gallery__Comments from "@/components/Gallery/Gallery__Comments";
import Gallery__Colors from "@/components/Gallery/Gallery__Colors";

export default function ArtPiece({
  data,
  isLoading,
  favorites,
  toggleFavorite,
}) {
  const router = useRouter();
  const [comments, setComments] = useLocalStorage(
    `comments for ${router.query.slug}`,
    []
  );
    
  console.log('slug comm', comments);
  

  if (data && data.length > 0) {
    const { slug, name, imageSource, artist, year, genre, colors } = data.find(
      (img) => img.slug === router.query.slug
    );
    const isFav = favorites?.find((fav) => fav.id === slug && fav.isFav);
    const style = { border: "lime 5px solid" };

    return (
      <main>
        <button onClick={router.back} type="button">
          back
        </button>
        <h1>
          {name}
          {isFav ? " ⭐️ love it so much" : " 🤷"}
        </h1>
        <Image
          height={300}
          width={300}
          alt="Art"
          src={imageSource}
          style={isFav ? style : ""}
        />
        <p>
          By {artist}, {year}, {genre}
        </p>
        <Gallery__Button__Favorite
          toggleFavorite={toggleFavorite}
          id={slug}
          favorites={favorites}
        />
        <Gallery__Colors colors={colors} />
        <Gallery__Comments
          comments={comments}
          id={slug}
          setComments={setComments}
        />
      </main>
    );
  } else if (isLoading) {
    return "Loading";
  } else {
    return "Nothing to see here";
  }
}
