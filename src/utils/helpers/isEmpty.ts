import { isNullOrUndefined } from "src/utils/helpers/isNotNullOrUndefined";

export const isEmpty = (value: string | null | undefined): boolean => {
  return isNullOrUndefined(value) || value.trim() === "";
};

export const isNotEmpty = (value: string | null | undefined): boolean => {
  return !isEmpty(value);
};
