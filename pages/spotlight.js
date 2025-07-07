import Gallery__Images__List from "@/components/Gallery/Gallery__Images__List";

export default function Spotlight({ data }) {
  return (
    <div>
      <h1> Spotlight </h1>

      <Gallery__Images__List data={data} />
    </div>
  );
}
