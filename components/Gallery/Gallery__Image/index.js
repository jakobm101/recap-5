import Image from "next/image";

export default function Gallery__Image({ image }) {
  console.log("gal image", image);

  return (
    <>
      <Image src={image.imageSource} alt="Art" width={100} height={100} />
    </>
  );
}
