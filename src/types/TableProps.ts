import { Column } from "react-table";
import { TGetListResponse } from "src/types/TGetListResponse";

export type TableProps<T extends TRow> = {
  columns: Column<T>[];
  data: T[];
  meta: TMeta;
};

export type TRow = {
  id: number;
};

type TMeta = Omit<TGetListResponse<unknown>, "results">;
