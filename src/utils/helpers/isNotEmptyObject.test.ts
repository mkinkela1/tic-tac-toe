import { isNotObjectEmpty } from "src/utils/helpers/isEmptyObject";

test("should return false for an empty object", () => {
  const testObj = {};
  const result = isNotObjectEmpty(testObj);
  expect(result).toBe(false);
});

test("should return true for non empty object", () => {
  const testObj = { test: true };
  const result = isNotObjectEmpty(testObj);
  expect(result).toBe(true);
});
