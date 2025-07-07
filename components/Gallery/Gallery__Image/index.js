import Image from "next/image";
import { useRouter } from "next/router";
import Gallery__Button__Favorite from "../Gallery__Button__Favorite";

export default function Gallery__Image({ image, favorites, toggleFavorite }) {
  const router = useRouter();
  const isFav = favorites?.find(fav => fav.id === image.slug && fav.isFav)
  return (
    <div style={{ border: "1px black solid", padding: "5px", margin: "5px" }}>
      <Image
        onClick={() => router.push(`/art-pieces/${image.slug}`)}
        src={image.imageSource}
        alt="Art"
        width={100}
        height={100}
        style={
          isFav
            ? { border: "5px lime solid" }
            : ""
        }
      />
      {isFav ?  "⭐️ I LOVE THIS ⭐️" : ""}
      <p>{image.name}</p>
      <p>{image.artist}</p>
      <Gallery__Button__Favorite
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        id={image.slug}
      />
    </div>
  );
}
