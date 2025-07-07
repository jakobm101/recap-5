export default function HomePage({ data }) {
  console.log("fetched", data?.[0].slug);
  
  return (
    <div>
      <h1> ART Gallery</h1>
    </div>
  );
}
