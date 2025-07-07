import Gallery__Images__List from "@/components/Gallery/Gallery__Images__List";
import Spotlight from "@/components/Gallery/Gallery__Spotlight";

export default function Homepage({ data }) {
  const randomIndex = (array = []) => {
    const length = array.length;
    return Math.floor(Math.random() * length);
  };

  return (
    <div>
      <h1> Spotlight </h1>
      {data && data.length > 0 && (<Spotlight image={data[randomIndex(data)]} />)}
      <Gallery__Images__List data={data} />
    </div>
  );
}
