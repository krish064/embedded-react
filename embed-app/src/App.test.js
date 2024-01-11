import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders form", () => {
  render(<App />);
  const linkElement = screen.getByText(/username/i);
  expect(linkElement).toBeInTheDocument();
});
