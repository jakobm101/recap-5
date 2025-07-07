import Image from "next/image";
import { useRouter } from "next/router";

export default function Gallery__Image({ image }) {
  const router = useRouter()
  return (
    <div style={{border: '1px black solid', padding: '5px', margin: '5px'}}>
      <Image onClick={()=> router.push(`/art-pieces/${image.slug}`)} src={image.imageSource} alt="Art" width={100} height={100} />
      <p>{image.name}</p>
      <p>{image.artist}</p>
    <button>favorite</button>
    </div>
  );
}
