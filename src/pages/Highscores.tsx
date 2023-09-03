import Table from "src/components/table/Table";
import WinRateCell from "src/components/table/cells/WinRateCell";
import useColumns from "src/hooks/useColumns";
import useFetch from "src/hooks/useFetch";
import useTableQueryParams from "src/hooks/useTableQueryParams";
import { TCell } from "src/types/TCell";
import { TGetUsersResponse, TUser } from "src/types/TGetUsersResponse";

const Highscores: React.FC = () => {
  const { filters, setFilters } = useTableQueryParams();
  const { data } = useFetch<TGetUsersResponse>(
    "https://tictactoe.aboutdream.io/users/",
    filters,
  );

  const columns = useColumns<TUser>([
    {
      Header: "Username",
      accessor: "username",
    },
    {
      Header: "Number of games",
      accessor: "game_count",
    },
    {
      Header: "Win rate",
      accessor: "win_rate",
      Cell: ({
        row: {
          original: { win_rate },
        },
      }: TCell<TUser>) => <WinRateCell value={win_rate} />,
    },
  ]);

  const { results, ...meta } = data || {};

  return (
    <Table
      columns={columns}
      data={results}
      meta={meta}
      setTableQueryParams={setFilters}
    />
  );
};

export default Highscores;
