export const isNotNullOrUndefined = <T>(
  value: T | null | undefined,
): value is T => {
  return value !== null && value !== undefined;
};

export const isNullOrUndefined = <T>(
  value: T | null | undefined,
): value is null | undefined => {
  return !isNotNullOrUndefined(value);
};
