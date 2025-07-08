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
  const { query, back } = useRouter();
  const [comments, setComments] = useLocalStorage(`comments`, []);

  console.log("slug comm", comments);
  console.log("router slug", query.slug);

  if (data && data.length > 0) {
    const { slug, name, imageSource, artist, year, genre, colors } = data.find(
      (img) => img.slug === query.slug
    );
    const isFav = favorites?.find((fav) => fav.id === slug && fav.isFav);

    return (
      <main>
        <button onClick={back} type="button" className="button__back">
          back
        </button>
        <h1>
          {name}
          {isFav ? " 📗" : " 📓"}
        </h1>
        <Image height={300} width={300} alt="Art" src={imageSource} />
        <p>
          By {artist}, {year}, {genre}
        </p>
        <Gallery__Button__Favorite
          toggleFavorite={toggleFavorite}
          id={slug}
          favorites={favorites}
          className={"button__favorite-details"}
        />
        <Gallery__Colors colors={colors} />
        <Gallery__Comments
          comments={comments}
          slug={slug}
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
