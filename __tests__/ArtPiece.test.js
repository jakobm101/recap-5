import ArtPiece from "../pages/art-pieces/[slug]";
import { render, screen } from "@testing-library/react";
import mockRouter from "next-router-mock";
import mockData from "@/data/mockData";

jest.mock("next/router", () => jest.requireActual("next-router-mock"));

describe("slug", () => {
  it("Art piece fails loading", () => {
    mockRouter.push("/");
    render(<ArtPiece />);
    const text = screen.getByText(/nothing/i);
    expect(text).toBeInTheDocument();
  });
});

describe("slug loaded", () => {
  it("checks for Art Piece details", () => {
    // This is quite tricky but good to know how this works
    mockRouter.push({
      pathname: "/art-pieces/[slug]",
      query: { slug: "orange-red-and-green" },
    });

    render(<ArtPiece data={mockData} />);

    const textArtist = screen.getByText(/jakob m101/i);
    expect(textArtist).toBeInTheDocument();

    const textYear = screen.getByText(/2018/i);
    expect(textYear).toBeInTheDocument();

    const textGenre = screen.getByText(/abstract painting/i);
    expect(textGenre).toBeInTheDocument();

    const form = screen.getByRole("textbox", { placeholder: /comment/i });
    expect(form).toBeInTheDocument();

    const submit = screen.getByRole("button", { name: /submit/i });
    expect(submit).toBeInTheDocument();

    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();

    const colors = screen.getAllByRole("article", {name:/color sample/i});
    // console.log(color.style._values['background-color']);
    const colorBG = colors[1].style._values['background-color']
    
    expect(colorBG).toBeDefined()
    expect(colors.length).toBeGreaterThanOrEqual(5);
  });
});
