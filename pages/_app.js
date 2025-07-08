import GlobalStyle from "../styles";
import Navigation from "@/components/Navigation";
import useSWR from "swr";
import useLocalStorage from "use-local-storage";

const URL = "https://example-apis.vercel.app/api/art";
const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const { data, isLoading, error } = useSWR(URL, () => fetcher(URL));
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  

  const toggleFavorite = (id) => {

    // let newArray = favorites.map((fav) => fav.id === id ? { ...fav, isFav: !fav.isFav } : fav);
    let newArray = [];
    let isNew = true;
    if (favorites) {
      for (let fav of favorites) {
        if (id === fav.id) {
          isNew = false;
          newArray.push({ ...fav, isFav: !fav.isFav });
        } else newArray.push(fav);
      }
    }
    !isNew || newArray.push({ id: id, isFav: true });

    setFavorites(newArray);
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
