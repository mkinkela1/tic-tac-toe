import useFetch from "src/hooks/useFetch";
import { TGetGamesResponse } from "src/types/TGetGamesResponse";

const GamesList: React.FC = () => {
  const data = useFetch<TGetGamesResponse>(
    "https://tictactoe.aboutdream.io/games/",
  );

  return (
    <table className="w-full table-auto border-collapse  text-left">
      <thead>
        <tr className="border-b">
          <th className="border-b py-3 pl-3 font-bold text-gray-700">
            First player
          </th>
          <th className="border-b py-3 pl-3 font-bold text-gray-700">
            Second player
          </th>
          <th className="border-b py-3 pl-3 font-bold text-gray-700">Winner</th>
          <th className="border-b py-3 pl-3 font-bold text-gray-700">
            Created at
          </th>
          <th className="border-b py-3 pl-3 font-bold text-gray-700">Status</th>
        </tr>
      </thead>
      <tbody className="">
        {data?.results.map(
          ({ first_player, second_player, winner, created, status }) => (
            <tr className="border-b transition-all duration-300 ease-in-out odd:bg-white even:bg-gray-100 hover:bg-gray-200">
              <td className="py-3 pl-3 font-normal text-gray-500">
                {first_player.username}
              </td>
              <td className="py-3 pl-3 font-normal text-gray-500">
                {second_player.username}
              </td>
              <td className="py-3 pl-3 font-normal text-gray-500">
                {winner?.username}
              </td>
              <td className="py-3 pl-3 font-normal text-gray-500">
                {new Date(created).toLocaleString()}
              </td>
              <td className="py-3 pl-3 font-normal text-gray-500">{status}</td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
};

export default GamesList;
