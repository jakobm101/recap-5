import useSWR from "swr";

const URL = 'https://example-apis.vercel.app/api/art'
const fetcher = (url) => fetch(url).then(response => response.json())

export default function HomePage() {
  const { data } = useSWR(URL,()=>fetcher(URL))
  console.log('fetched', data[0].slug);
  
  return (
    <div>

      <h1>'ART' Gallery</h1>
    </div>
  );
}
