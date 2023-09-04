import Button from "src/components/Button";
import Table from "src/components/table/Table";
import WinRateCell from "src/components/table/cells/WinRateCell";
import useColumns from "src/hooks/useColumns";
import useFetch from "src/hooks/useFetch";
import useTableQueryParams from "src/hooks/useTableQueryParams";
import { TCell } from "src/types/TCell";
import { TGetUsersResponse, TUser } from "src/types/TGetUsersResponse";
import { BASE_API_URL } from "src/utils/Constants";

const Highscores: React.FC = () => {
  const { filters, setFilters } = useTableQueryParams();
  const { data, refetch: refetchUsersList } = useFetch<TGetUsersResponse>(
    `${BASE_API_URL}/users/`,
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
    <>
      <section className="relative w-full flex flex-col">
        <div className="mx-auto px-4 w-full flex mb-4 justify-end">
          <div className="max-w-sm">
            <Button label="Refresh" onClick={refetchUsersList} />
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

export default Highscores;
