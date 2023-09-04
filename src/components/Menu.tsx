import { Link } from "react-router-dom";
import { AllRoutes } from "src/enums/AllRoutes";

const Menu: React.FC = () => (
  <header className="bg-gray-800 text-white py-4">
    <div className="container mx-auto flex justify-between items-center">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to={AllRoutes.GAMES} className="hover:text-gray-400">
              All games
            </Link>
          </li>
          <li>
            <Link to={AllRoutes.HIGHSCORES} className="hover:text-gray-400">
              Highscores
            </Link>
          </li>
        </ul>
      </nav>
      <Link to={AllRoutes.LOGOUT} className="hover:text-gray-400">
        Logout
      </Link>
    </div>
  </header>
);

export default Menu;
