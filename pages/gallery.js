import Gallery__Images__List from "@/components/Gallery/Gallery__Images__List";
import Navigation from "@/components/Navigation";

export default function Gallery({ data, isLoading, error }) {

  return (
    <div>
      <Navigation/>
      <h1> Gallery </h1>
      {!isLoading || <h2> is loading</h2>}
      <Gallery__Images__List data={data} />

    </div>
  );
}
