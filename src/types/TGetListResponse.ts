export type TGetListResponse<T> = {
  count: number;
  next?: string;
  previous?: string;
  results: T[];
};
