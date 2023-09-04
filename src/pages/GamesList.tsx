import { useNavigate } from "react-router-dom";
import Button from "src/components/Button/Button";
import SelectableDropdown, {
  TOption,
} from "src/components/Dropdown/SelectableDropdown";
import Table from "src/components/table/Table";
import DateTimeCell from "src/components/table/cells/DateTimeCell";
import GameActionsCell from "src/components/table/cells/GameActionsCell";
import PlayerCell from "src/components/table/cells/PlayerCell";
import WinnerCell from "src/components/table/cells/WinnerCell";
import { AllRoutes } from "src/enums/AllRoutes";
import useColumns from "src/hooks/useColumns";
import useCreateNewGame from "src/hooks/useCreateNewGame";
import useFetch from "src/hooks/useFetch";
import useTableQueryParams from "src/hooks/useTableQueryParams";
import { TCell } from "src/types/TCell";
import { TBoardResult, TGetGamesResponse } from "src/types/TGetGamesResponse";
import { BASE_API_URL } from "src/utils/Constants";

const statusOptions: TOption[] = [
  { id: "open", value: "open", label: "Open" },
  { id: "progress", value: "progress", label: "In progress" },
  { id: "finished", value: "finished", label: "Finished" },
];

const GamesList: React.FC = () => {
  const { filters, setFilters } = useTableQueryParams();
  const { data, refetch: refetchGamesList } = useFetch<TGetGamesResponse>(
    `${BASE_API_URL}/games/`,
    filters,
  );
  const { createNewGame } = useCreateNewGame();
  const navigate = useNavigate();

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
    {
      Header: "Actions",
      Cell: ({ row: { original } }: TCell<TBoardResult>) => (
        <GameActionsCell value={original} dependencyUpdate={refetchGamesList} />
      ),
    },
  ]);

  const { results, ...meta } = data || {};

  const onCrateNewGame = async () => {
    const id = await createNewGame();

    await refetchGamesList();

    navigate(`${AllRoutes.GAMES}/${id}`);
  };

  return (
    <>
      <section className="relative w-full flex">
        <div className="mx-auto px-4 w-full flex mb-4 justify-between lg:flex lg:flex-row flex-col items-center">
          <SelectableDropdown
            options={statusOptions}
            onSelect={(status: TOption) => setFilters({ status: status.value })}
            value={filters?.status}
          />
          <div className="max-w-sm lg:flex lg:flex-row flex-col gap-2">
            <Button label="Start new game" onClick={onCrateNewGame} />
            <Button label="Refresh" onClick={refetchGamesList} />
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
