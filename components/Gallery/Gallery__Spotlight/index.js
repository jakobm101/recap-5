import Image from "next/image";
import Gallery__Button__Favorite from "../Gallery__Button__Favorite";

export default function Spotlight({ image, isLoading, toggleFavorite, favorites }) {
  if (isLoading) {
    return <h2>is loading ⭐️ </h2>;
  } else if (image) {
    return (
      <>
        <Image src={image.imageSource} height={500} width={500} alt="Art" />
        <p>{image.artist}</p>
        <Gallery__Button__Favorite toggleFavorite={toggleFavorite} id={image.slug} favorites={favorites}/>
      </>
    );
  } else {
    return <h2>No image available</h2>;
  }
}
