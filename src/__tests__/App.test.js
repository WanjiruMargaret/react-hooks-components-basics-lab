import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import App from "../components/App";

test("renders without errors", () => {
  expect(() => render(<App />)).not.toThrow();
});

test("renders the correct child components", () => {
  const { container } = render(<App />);

  /*
    Uncomment the line below to see the DOM elements being returned
    by the App component in your terminal when you run the tests
  */
  screen.debug();

  
  // Check for "Whoa!" from ExampleComponent
  expect(screen.getByText("Whoa!")).toBeInTheDocument();

  // Check for iframe with title "time video" from TestComponent
  expect(screen.getByTitle("time video")).toBeInTheDocument();

  expect(container.querySelector("nav")).toBeInTheDocument();
  expect(container.querySelector("#home")).toBeInTheDocument();
  expect(container.querySelector("#about")).toBeInTheDocument();
});
