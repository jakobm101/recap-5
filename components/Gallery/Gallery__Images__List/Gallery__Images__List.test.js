import Gallery__Images__List from ".";
import { render, screen } from "@testing-library/react";
import mockRouter from "next-router-mock";

jest.mock("next/router", () => jest.requireActual("next-router-mock"));

const data = [
  {
    slug: "orange-red-and-green",
    artist: "Jakob M101",
    name: "You are beautiful on the inside",
    imageSource: "/docs/wireframes.excalidraw.png",
    year: "2018",
    genre: "Abstract Painting",
    colors: ["#0f5855", "#e6ba15", "#b42011", "#cec4c6", "#d5561f"],
    dimensions: {
      height: 2432,
      width: 1920,
      type: "jpg",
    },
  },
];

// used package for routing
// https://www.npmjs.com/package/next-router-mock
describe("GalleryList", () => {
  it("mocks the useRouter hook", () => {
    // Set the initial url:
    mockRouter.push("/");

    // Render the component:
    render(<Gallery__Images__List data={data} />);

    const article = screen.getByRole("article");
    expect(article).toBeInTheDocument();

    const img = screen.getByRole("img", {name:/art/i});
    expect(img).toBeInTheDocument();

    const button = screen.getByRole("button", { name: /favorite/i });
    expect(button).toBeInTheDocument();

    const textArtist = screen.getByText("Jakob M101");
    expect(textArtist).toBeInTheDocument();
  });
});
