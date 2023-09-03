type Props = {
  type: "square" | "circle" | "row";
};

const SkeletonLoader: React.FC<Props> = ({ type = "square" }) => {
  const getClassByType = () => {
    if (type === "square") return "aspect-square rounded";
    if (type === "circle") return "rounded-full";
    return "h-2.5 rounded";
  };

  return (
    <div className="w-full animate-pulse p-2">
      <div className={`${getClassByType()} bg-gray-400 w-full mb-4`}></div>
    </div>
  );
};

export default SkeletonLoader;
