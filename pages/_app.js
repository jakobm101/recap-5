import GlobalStyle from "../styles";
import Navigation from "@/components/Navigation";
import { useState } from "react";
import useSWR from "swr";

const URL = "https://example-apis.vercel.app/api/art";
const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const { data, isLoading, error } = useSWR(URL, () => fetcher(URL));
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id = 1) => {
    console.log("handling", id, favorites);
    const favorite = favorites.find((fav) => fav.id === id);
    const newFav = { id: id, isFav: true };
    setFavorites([...favorites, favorite ? favorite : newFav]);

  };

  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Component
        {...pageProps}
        data={data}
        isLoading={isLoading}
        error={error}
        toggleFavorite={toggleFavorite}
        favorites={favorites}
      />
    </>
  );
}
