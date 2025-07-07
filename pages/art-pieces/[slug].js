import { useRouter } from "next/router";
import Image from "next/image";
import { uid } from "react-uid";
import Gallery__Button__Favorite from "@/components/Gallery/Gallery__Button__Favorite";
import useLocalStorage from "use-local-storage";
import Gallery__Comments from "@/components/Gallery/Gallery__Comments";

export default function ArtPiece({
  data,
  isLoading,
  favorites,
  toggleFavorite,
}) {
  const router = useRouter();
  const comments = useLocalStorage("comments", { body: "hi" });
  console.log(comments);

  if (data && data.length > 0) {
    const { slug, name, imageSource, artist, year, genre, colors } = data.find(
      (img) => img.slug === router.query.slug
    );
    const isFav = favorites?.find((fav) => fav.id === slug && fav.isFav);
    const style = { border: "lime 5px solid" };

    return (
      <>
        <button onClick={router.back} type="button">
          back
        </button>
        <h1>
          {name}
          {isFav ? " ⭐️ love it so much" : " 🤷"}
        </h1>
        <Image
          height={500}
          width={500}
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
        <h4>Colors</h4>
        {colors.map((color) => {
          return (
            <div style={{ color: color, display: "inline" }} key={uid(color)}>
              {color}
            </div>
          );
        })}
        <Gallery__Comments comments={comments} />
      </>
    );
  } else if (isLoading) {
    return "Loading";
  } else {
    return "Nothing to see here";
  }
}
