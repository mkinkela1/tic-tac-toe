import { isNullOrUndefined } from "src/utils/helpers/isNotNullOrUndefined";

it("should return false for a non-null and non-undefined value", () => {
  const testValue = "Hello, World!";
  const result = isNullOrUndefined(testValue);
  expect(result).toBe(false);
});

it("should return true for a null value", () => {
  const testValue = null;
  const result = isNullOrUndefined(testValue);
  expect(result).toBe(true);
});

it("should return true for an undefined value", () => {
  const testValue = undefined;
  const result = isNullOrUndefined(testValue);
  expect(result).toBe(true);
});

it("should return false for a numeric value", () => {
  const testValue = 42;
  const result = isNullOrUndefined(testValue);
  expect(result).toBe(false);
});

it("should return false for an empty string", () => {
  const testValue = "";
  const result = isNullOrUndefined(testValue);
  expect(result).toBe(false);
});

it("should return false for a boolean value", () => {
  const testValue = true;
  const result = isNullOrUndefined(testValue);
  expect(result).toBe(false);
});
