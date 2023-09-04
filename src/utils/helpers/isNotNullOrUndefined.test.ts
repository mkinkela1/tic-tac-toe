import { isNotNullOrUndefined } from "src/utils/helpers/isNotNullOrUndefined";

test("should return true for a non-null and non-undefined value", () => {
  const testValue = "Test";
  const result = isNotNullOrUndefined(testValue);
  expect(result).toBe(true);
});

test("should return false for a null value", () => {
  const testValue = null;
  const result = isNotNullOrUndefined(testValue);
  expect(result).toBe(false);
});

test("should return false for an undefined value", () => {
  const testValue = undefined;
  const result = isNotNullOrUndefined(testValue);
  expect(result).toBe(false);
});

test("should return true for a numeric value", () => {
  const testValue = 42;
  const result = isNotNullOrUndefined(testValue);
  expect(result).toBe(true);
});

test("should return true for an empty string", () => {
  const testValue = "";
  const result = isNotNullOrUndefined(testValue);
  expect(result).toBe(true);
});

test("should return true for a boolean value", () => {
  const testValue = true;
  const result = isNotNullOrUndefined(testValue);
  expect(result).toBe(true);
});
