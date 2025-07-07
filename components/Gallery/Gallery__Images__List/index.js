import { uid } from "react-uid";
import Gallery__Image from "../Gallery__Image";

export default function Gallery__Images__List({
  data,
  favorites,
  toggleFavorite,
}) {
  if (data) {
    return (
      <section className="gallery__list">
        {data.map((image) => (
          <Gallery__Image
            image={image}
            key={uid(image)}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </section>
    );
  }
}
