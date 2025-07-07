import Image from "next/image";

export default function HomePage({ data }) {
  console.log("fetched", data?.[0]);

  return (
    <div>
      <h1> ART Gallery</h1>
      <Image src={data?.[0].imageSource} width={100} height={100} alt="Art"></Image>
    </div>
  );
}
