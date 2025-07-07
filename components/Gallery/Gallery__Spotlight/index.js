import Image from "next/image";

export default function Spotlight({ image }) {
  if (image) {
    return (
      <>
        <h2>Spotlight Image</h2>
        <Image src={image.imageSource} height={500} width={500} alt="Art" />
      </>
    );
  } else {
    return <h2>Loading</h2>;
  }
}
