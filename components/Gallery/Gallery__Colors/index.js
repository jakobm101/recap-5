import { uid } from "react-uid";

export default function Gallery__Colors({ colors }) {
  return (
    <section className="colors">
      {colors.map((color) => {
        return (
          <article
            style={{
              color: "white",
              display: "inline-block",
              width: "80px",
              height: "70px",
              backgroundColor: color,
              padding: "5px",
              margin: "5px",
            }}
            key={uid(color)}
          >
            {color}
          </article>
        );
      })}
    </section>
  );
}
