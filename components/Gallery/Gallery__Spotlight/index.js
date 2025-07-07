import Image from "next/image";

export default function Spotlight({ image, isLoading }) {
  if (isLoading) {
    return <h2>is loading ⭐️ </h2>;
  } else if (image) {
    return (
      <>
        <h2>Spotlight Image</h2>
        <Image src={image.imageSource} height={500} width={500} alt="Art" />
        <p>{image.artist}</p>
      </>
    );
  } else {
    return <h2>No image available</h2>;
  }
}
