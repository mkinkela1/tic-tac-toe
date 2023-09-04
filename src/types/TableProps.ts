import { Column } from "react-table";
import { TGetListResponse } from "src/types/TGetListResponse";

export type TableProps<T extends TRow> = {
  columns: Column<T>[];
  data: T[] | undefined;
  meta: TMeta;
  setTableQueryParams: (val: TTableQueryParams) => void;
};

export type TRow = {
  id: number;
};

type TMeta = Omit<TGetListResponse<unknown>, "results">;
type TTableQueryParams = Omit<TMeta, "count">;
