import Image from "next/image";

export default function Gallery__Image({ data }) {
  return (
    <>
      <Image
        src={data ? data[0]?.imageSource : ""}
        alt="Art"
        width={100}
        height={100}
      />
      <span>{data ? data[0].slug : "Loading"}</span>
    </>
  );
}
