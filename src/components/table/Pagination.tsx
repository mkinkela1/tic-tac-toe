import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import IconButton from "src/components/IconButton";

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
      <IconButton
        onClick={handlePreviousClick}
        icon={<ArrowLeftIcon className="w-6 h-6 inline-block align-middle" />}
        label="Previous Page"
        disabled={!canGoToPreviousPage}
      />
      <IconButton
        onClick={handleNextClick}
        icon={<ArrowRightIcon className="w-6 h-6 inline-block align-middle" />}
        label="Next Page"
        disabled={!canGoToNextPage}
      />
    </div>
  );
};

export default Pagination;
