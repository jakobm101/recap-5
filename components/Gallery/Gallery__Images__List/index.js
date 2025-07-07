import { uid } from "react-uid";
import Gallery__Image from "../Gallery__Image";

export default function Gallery__Images__List({ data }) {
  if (data) {
    return (
      <>
        <h2>List</h2>
        {data.map((image) => (
          <Gallery__Image image={image} key={uid(image)} />
        ))}
      </>
    );
  }
}
