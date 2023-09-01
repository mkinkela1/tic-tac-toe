import React from "react";

type Props = {
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
  disabled?: boolean;
};

const IconButton: React.FC<Props> = ({ onClick, icon, label, disabled }) => {
  return (
    <button
      className="p-2 rounded-full hover:bg-gray-200 focus:outline-none cursor-pointer disabled:cursor-not-allowed"
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      <span className="sr-only disabled: font-gray-200">{label}</span>
    </button>
  );
};

export default IconButton;
