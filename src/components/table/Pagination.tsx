import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

type Props = {
  canGoToPreviousPage: boolean;
  canGoToNextPage: boolean;
  handlePreviousClick: () => void;
  handleNextClick: () => void;
};

const Pagination: React.FC<Props> = ({
  canGoToNextPage,
  canGoToPreviousPage,
  handleNextClick,
  handlePreviousClick,
}) => {
  return (
    <div className="flex">
      <nav>
        <ul>
          <button
            onClick={handlePreviousClick}
            disabled={!canGoToPreviousPage}
            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-800 disabled:text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">Previous</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            onClick={handleNextClick}
            disabled={!canGoToNextPage}
            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-800 disabled:text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">Next</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
