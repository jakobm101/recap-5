import { uid } from "react-uid";

export default function Gallery__Colors({ colors }) {
  return (
    <>
      <h4>Colors</h4>
      {colors.map((color) => {
        return (
          <div
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
          </div>
        );
      })}
    </>
  );
}
