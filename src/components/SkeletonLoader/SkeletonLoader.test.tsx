import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import SkeletonLoader from "src/components/SkeletonLoader/SkeletonLoader";

test("renders a square loader by default", () => {
  const { container } = render(<SkeletonLoader type="square" />);
  const squareLoader = container.querySelector(".aspect-square.rounded");

  expect(squareLoader).toBeInTheDocument();
});

test('renders a circle loader when type is "circle"', () => {
  const { container } = render(<SkeletonLoader type="circle" />);
  const circleLoader = container.querySelector(".rounded-full");

  expect(circleLoader).toBeInTheDocument();
});

test('renders a circle loader when type is "row"', () => {
  const { container } = render(<SkeletonLoader type="row" />);
  const circleLoader = container.querySelector(".rounded");

  expect(circleLoader).toBeInTheDocument();
});
