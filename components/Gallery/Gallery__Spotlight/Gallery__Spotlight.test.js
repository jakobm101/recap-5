import Spotlight from ".";
import { render, screen } from "@testing-library/react";

test(`Spotlight test`, () => {
  const image = {
    imageSource: "/docs/wireframes.excalidraw.png",
    artist: "Yo Mom",
  };
  render(<Spotlight image={image} />); // fake object given
  const buttonFavorite = screen.getByRole("button", { name: /favorite/i });
  expect(buttonFavorite).toBeInTheDocument();
  const textArtist = screen.getByText("Yo Mom");
  expect(textArtist).toBeInTheDocument();
});

test(`Spotlight IDLE`, () => {
  render(<Spotlight />); // no image object given
  const textLoading = screen.getByText('No image available');
  expect(textLoading).toBeInTheDocument();
});
