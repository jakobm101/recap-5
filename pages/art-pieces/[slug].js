import { useRouter } from "next/router";

export default function ArtPiece({ data }) {
  const router = useRouter();
  console.log("slug", router.query.slug);

  return (
    <>
      <h1>Art Piece [Slug]</h1>
    </>
  );
}
