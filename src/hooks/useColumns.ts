import { Column } from "react-table";
import { TRow } from "src/types/TableProps";

type ColumnTypes = object & TRow;

const useColumns = <T extends ColumnTypes>(columns: Column<T>[]) => {
  return columns;
};

export default useColumns;
