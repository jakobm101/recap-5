import Gallery__Images__List from "@/components/Gallery/Gallery__Images__List";
import Spotlight from "@/components/Gallery/Gallery__Spotlight";
import { useEffect } from "react";

export default function Spotlight__Page({ data }) {
  const randomIndex = (array = []) => {
    const length = array.length;
    const randomIndex = Math.floor(Math.random() * length);
    console.log({ randomIndex });
    return randomIndex
  };

  return (
    <div>
      <h1> Spotlight </h1>
      {data && data.length > 0 && (<Spotlight image={data[randomIndex(data)]} />)}
      <Gallery__Images__List data={data} />
    </div>
  );
}
