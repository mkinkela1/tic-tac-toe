import { isNotNullOrUndefined } from "src/utils/isNotNullOrUndefined";

export function removeUndefinedAndNull(obj: Record<string, unknown>) {
  const filteredObject: Record<string, unknown> = {};

  for (const property in obj) {
    if (isNotNullOrUndefined(obj[property])) {
      filteredObject[property] = obj[property];
    }
  }

  return filteredObject;
}
