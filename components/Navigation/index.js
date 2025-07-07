import Nav__Link from "./Nav__Link";

export default function Navigation() {
  return (
    <nav>
      <Nav__Link link={"/"}>Spotlight</Nav__Link>
      <Nav__Link link={"/art-pieces"}>Gallery</Nav__Link>
      <Nav__Link link={"/favorites"}>Favorites</Nav__Link>
    </nav>
  );
}
