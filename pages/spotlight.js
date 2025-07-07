import Gallery__Images__List from "@/components/Gallery/Gallery__Images__List";
import Spotlight from "@/components/Gallery/Gallery__Spotlight";

export default function Spotlight__Page({ data }) {
  if (data) {
    const image = data[0];
    return (
      <div>
        <h1> Spotlight </h1>
        <Spotlight image={image} />
        <Gallery__Images__List data={data} />
      </div>
    );
  } else {return "Loading"}
}
