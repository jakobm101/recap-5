import Image from "next/image";
import { useRouter } from "next/router";
import Gallery__Button__Favorite from "../Gallery__Button__Favorite";

export default function Gallery__Image({ image, favorites, toggleFavorite }) {
  const router = useRouter();
  const isFav = favorites?.find((fav) => fav.id === image.slug && fav.isFav);

  const routeDetails = () => router.push(`/art-pieces/${image.slug}`);

  return (
    <article
      className={"gallery__image"}
    >
      <Image
        onClick={routeDetails}
        src={image.imageSource}
        alt="Art"
        width={100}
        height={100}
      />
      <div className="Gallery__Image--textbox">
        <p>{image.name}</p>
        <p>{image.artist}</p>
      </div>
      <div className="Gallery__Image--buttons">
        <Gallery__Button__Favorite
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          id={image.slug}
        />
        <button onClick={routeDetails}>🔎 Details </button>
      </div>
    </article>
  );
}
