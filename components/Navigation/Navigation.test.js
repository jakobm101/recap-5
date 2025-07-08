import Navigation from ".";
import { render, screen } from "@testing-library/react";

test("Navigation", () => {
  render(<Navigation />);
  const favorites = screen.getByText("Favorites", { name: /Favorites/i });
  expect(favorites).toBeInTheDocument();
    
  const links = screen.getAllByRole('link')
  expect(links.length).toBeGreaterThanOrEqual(3)

  const linkHome = screen.getByRole("link", {name:/spotlight/i});
  expect(linkHome).toHaveAttribute('href', '/')
});
