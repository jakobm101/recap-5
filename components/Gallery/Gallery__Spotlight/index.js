export default function Spotlight({ image }) {
  image ?? console.log("No image yet");
  !image || console.log("image arrived", image);

  if (image) {
    return (
      <>
        <h2>Spotlight Image</h2>
      </>
    );
  } else {
    return "Loading";
  }
}
