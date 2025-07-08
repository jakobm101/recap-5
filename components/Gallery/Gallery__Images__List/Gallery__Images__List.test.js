import Gallery__Images__List from ".";
import { render, screen } from "@testing-library/react";
import mockRouter from "next-router-mock";
import data from "@/data/mockData";

jest.mock("next/router", () => jest.requireActual("next-router-mock"));
    


// used package for routing
// https://www.npmjs.com/package/next-router-mock
describe("GalleryList", () => {
  it("mocks the useRouter hook", () => {
    // Set the initial url:
    mockRouter.push("/");

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
