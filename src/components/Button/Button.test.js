import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import Button from "./Button";

test("renders Button", () => {
  const component = render(<Button name={"test"} />);
  component.getByText("test");
});

test("clicking Button", () => {
  const mockHandler = jest.fn();
  const component = render(
    <PrimaryButton name={"test"} onClick={mockHandler} />
  );
  const button = component.getByText("test");
  fireEvent.click(button);
  expect(mockHandler).toHaveBeenCalledTimes(1);
});