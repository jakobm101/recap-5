import { uid } from "react-uid";

export default function Gallery__Colors({ colors }) {
  return (
    <section className="colors">
      {colors.map((color) => {
        return (
          <article
            className="color"
            style={{ backgroundColor: color }}
            key={uid(color)}
          >
            {color}
          </article>
        );
      })}
    </section>
  );
}
