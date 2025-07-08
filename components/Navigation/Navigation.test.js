import Navigation from ".";
import { render, screen } from "@testing-library/react";

test("Navigation", () => {
  render(<Navigation />);
  const favorites = screen.getByText("Favorites", { name: /Favorites/i });
    expect(favorites).toBeInTheDocument()
});
