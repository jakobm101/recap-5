import Gallery__Images__List from "@/components/Gallery/Gallery__Images__List";

export default function HomePage({ data }) {
  console.log("fetched", data?.[0]);

  return (
    <div>
      <h1> ART Gallery</h1>
      <Gallery__Images__List data={data} />
    </div>
  );
}
