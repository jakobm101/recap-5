import Gallery__Images__List from ".";
import { render, screen } from "@testing-library/react";

const data = [{}];

test("Gallery List is rendering", () => {
  render(<Gallery__Images__List />);
  expect().toBeInTheDocument();
});
