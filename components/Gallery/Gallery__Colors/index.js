
export default function Gallery__Colors({ colors }) {
  return (
    <section className="colors">
      {colors.map((color, index) => {
        return (
          <article
            className="color"
            style={{ backgroundColor: color }}
            key={index}
            aria-label="color sample"
          >
            {color}
          </article>
        );
      })}
    </section>
  );
}
