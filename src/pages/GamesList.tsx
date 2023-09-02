import Button from "src/components/Button";
import SelectableDropdown, { TOption } from "src/components/SelectableDropdown";
import Table from "src/components/table/Table";
import DateTimeCell from "src/components/table/cells/DateTimeCell";
import PlayerCell from "src/components/table/cells/PlayerCell";
import WinnerCell from "src/components/table/cells/WinnerCell";
import useColumns from "src/hooks/useColumns";
import useFetch from "src/hooks/useFetch";
import useTableQueryParams from "src/hooks/useTableQueryParams";
import { TCell } from "src/types/TCell";
import { TBoardResult, TGetGamesResponse } from "src/types/TGetGamesResponse";

const statusOptions: TOption[] = [
  { id: "open", value: "open", label: "Open" },
  { id: "progress", value: "progress", label: "In progress" },
  { id: "finished", value: "finished", label: "Finished" },
];

const GamesList: React.FC = () => {
  const { filters, setFilters } = useTableQueryParams();
  const data = useFetch<TGetGamesResponse>(
    "https://tictactoe.aboutdream.io/games/",
    filters,
  );

  const columns = useColumns<TBoardResult>([
    {
      Header: "First player",
      accessor: "first_player",
      Cell: ({
        row: {
          original: {
            first_player: { username, id },
          },
        },
      }: TCell<TBoardResult>) => <PlayerCell name={username} userId={id} />,
    },
    {
      Header: "Second player",
      accessor: "second_player",
      Cell: ({
        row: {
          original: { second_player },
        },
      }: TCell<TBoardResult>) => (
        <PlayerCell name={second_player?.username} userId={second_player?.id} />
      ),
    },
    {
      Header: "Winner",
      accessor: "winner",
      Cell: ({
        row: {
          original: { winner, status },
        },
      }: TCell<TBoardResult>) => <WinnerCell winner={winner} status={status} />,
    },
    {
      Header: "Created at",
      accessor: "created",
      Cell: ({
        row: {
          original: { created },
        },
      }: TCell<TBoardResult>) => <DateTimeCell value={created} />,
    },
    {
      Header: "Status",
      accessor: "status",
    },
  ]);

  const { results, ...meta } = data || {};

  return (
    <>
      <section className="relative w-full">
        <div className="mx-auto px-4 w-full flex items-end mb-4 justify-between">
          <SelectableDropdown
            options={statusOptions}
            onSelect={(status: TOption) => setFilters({ status: status.value })}
            value={filters?.status}
          />
          <div className="max-w-sm">
            <Button
              label="Start new game"
              onClick={() => console.log("click")}
            />
          </div>
        </div>
      </section>
      <Table
        columns={columns}
        data={results}
        meta={meta}
        setTableQueryParams={setFilters}
      />
    </>
  );
};

export default GamesList;
