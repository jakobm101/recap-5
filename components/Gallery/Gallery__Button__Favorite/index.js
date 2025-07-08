import { Heart } from "lucide-react";

export default function Gallery__Button__Favorite({
  id,
  toggleFavorite,
  favorites,
  className,
}) {
  const isFav = favorites?.find((fav) => fav.id === id)?.isFav;

  return (
        // <Heart color='white' className={"button-favorite " + (className && className)} {...(isFav ? {fill:'white'}: {})} onClick={() => toggleFavorite(id)}/>
        <Heart color='white' className={`button-favorite ${className ?? ""}`} {...(isFav ? {fill:'white'}: {})} onClick={() => toggleFavorite(id)}/>
  );
}
