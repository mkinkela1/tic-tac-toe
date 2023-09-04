import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import Button from "src/components/Button/Button";

test("renders a button with the provided label", () => {
  const label = "Click Me";
  const { getByText } = render(<Button label={label} onClick={() => {}} />);
  const buttonElement = getByText(label);
  expect(buttonElement).toBeInTheDocument();
});

test("calls the onClick callback when clicked", () => {
  const onClickMock = jest.fn();
  const { getByText } = render(
    <Button label="Click Me" onClick={onClickMock} />,
  );
  const buttonElement = getByText("Click Me");

  fireEvent.click(buttonElement);
  expect(onClickMock).toHaveBeenCalled();
});

test("disables the button when the disabled prop is true", () => {
  const { getByText } = render(
    <Button label="Click Me" onClick={() => {}} disabled={true} />,
  );
  const buttonElement = getByText("Click Me");
  expect(buttonElement).toBeDisabled();
});

test("does not call the onClick callback when disabled and clicked", () => {
  const onClickMock = jest.fn();
  const { getByText } = render(
    <Button label="Click Me" onClick={onClickMock} disabled={true} />,
  );
  const buttonElement = getByText("Click Me");

  fireEvent.click(buttonElement);
  expect(onClickMock).not.toHaveBeenCalled();
});
