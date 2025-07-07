import { useRouter } from "next/router";
import Image from "next/image";

export default function ArtPiece({ data, isLoading }) {
  const router = useRouter();
  if (data && data.length > 0) {
    const image = data.find((img) => img.slug === router.query.slug);

    return (
      <>
        <h1>{image.name}</h1>
        <Image height={500} width={500} alt="Art" src={image.imageSource} />
        <p></p>
      </>
    );
  } else if (isLoading) {
    return "Loading";
  } else {
    return "Nothing to see here";
  }
}
