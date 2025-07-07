import Gallery__Image from "../Gallery__Image";

export default function Gallery__Images__List({ data }) {
  data?.map((image) => {
    // console.log("image", image);
  });

  if (data) {
    return (
      <>
        <h2>List</h2>
        <Gallery__Image image={data[0]} />
        {data.map((image) => (
          <Gallery__Image image={image} key={image.id} />
        ))}
      </>
    );
  }
}
