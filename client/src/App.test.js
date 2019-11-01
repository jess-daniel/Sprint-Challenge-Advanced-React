import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders without crashing", () => {
  render(<App />);
});

test("there is a button", () => {
  const { getByTestId } = render(<App />);
  getByTestId("button");
});

test("the default text is I don't like sports", () => {
  const { getByText } = render(<App />);
  getByText(/I don't like sports/i);
});

test("it has a footer", () => {
  const { getByTestId } = render(<App />);
  getByTestId("footer");
});
