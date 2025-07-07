import Image from "next/image";

export default function Gallery__Image({ image }) {
  return (
    <>
      <Image src={image.imageSource} alt="Art" width={100} height={100} />
      <p>{image.name}</p>
      <p>{image.artist}</p>
    </>
  );
}
