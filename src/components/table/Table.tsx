import { useTable } from "react-table";
import Pagination from "src/components/Table/Pagination";
import { TRow, TableProps } from "src/types/TableProps";
import { getSearchParamsFromUrl } from "src/utils/getSearchParams";
import { isEmpty, isNotEmpty } from "src/utils/isEmpty";

const Table = <T extends TRow>({
  columns = [],
  data = [],
  meta: { count, next, previous },
  setTableQueryParams,
}: TableProps<T>) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  const goToPrev = () => {
    if (isEmpty(previous)) return;

    const queryParams = getSearchParamsFromUrl(previous ?? "");

    setTableQueryParams(queryParams);
  };

  const goToNext = () => {
    if (isEmpty(next)) return;

    const queryParams = getSearchParamsFromUrl(next ?? "");

    setTableQueryParams(queryParams);
  };

  return (
    <section className="relative w-full overflow-x-hidden">
      <div className="mx-auto px-4">
        <div
          className="bg-secondary overflow-x-auto rounded-md border border-gray-200 p-5 shadow-sm md:w-full"
          data-aos="fade-up"
        >
          <table
            className="w-full table-auto border-collapse  text-left"
            {...getTableProps()}
          >
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr className="border-b" {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps()}
                      className="border-b py-3 pl-3 font-bold text-gray-700"
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr
                    {...row.getRowProps()}
                    className="border-b transition-all duration-300 ease-in-out odd:bg-white even:bg-gray-100 hover:bg-gray-200"
                    key={row.id}
                  >
                    {row.cells.map((cell) => {
                      return (
                        <td
                          {...cell.getCellProps()}
                          className="py-3 pl-3 font-normal text-gray-500"
                        >
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <nav className="flex w-full items-center justify-between mt-4">
            <p className="text-base text-gray-600">
              <strong>Total: </strong> {count} results
            </p>
            <Pagination
              canGoToPreviousPage={isNotEmpty(previous)}
              canGoToNextPage={isNotEmpty(next)}
              handlePreviousClick={goToPrev}
              handleNextClick={goToNext}
            />
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Table;
