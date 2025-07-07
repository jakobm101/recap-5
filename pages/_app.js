import GlobalStyle from "../styles";
import useSWR from "swr";

const URL = "https://example-apis.vercel.app/api/art";
const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const { data } = useSWR(URL, () => fetcher(URL));

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} data={data} />
    </>
  );
}
