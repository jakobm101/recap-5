import { useRouter } from "next/router";
import Image from "next/image";
import { uid } from "react-uid";

export default function ArtPiece({ data, isLoading }) {
  const router = useRouter();
  if (data && data.length > 0) {
    const { name, imageSource, artist, year, genre, colors } = data.find(
      (img) => img.slug === router.query.slug
    );

    return (
      <>
        <h1>{name}</h1>
        <Image height={500} width={500} alt="Art" src={imageSource} />
        <p>
          By {artist}, {year}, {genre}
        </p>
        <h4>Colors</h4>
        {colors.map((color) => {
          return (
            <div style={{ color: color, display: 'inline'}} key={uid(color)}>
              {color}
            </div>
          );
        })}
      </>
    );
  } else if (isLoading) {
    return "Loading";
  } else {
    return "Nothing to see here";
  }
}
