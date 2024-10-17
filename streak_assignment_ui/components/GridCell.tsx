import React from "react";
import { GridCellInterface } from "@/utils/types";

const GridCell = ({
  active,
  selected,
  onClick,
  x = 0,
  y = 0,
}: GridCellInterface) => {
  return (
    <button
      onClick={onClick}
      className={` h-[3vh] w-[3vh] flex flex-col items-center justify-center relative rounded border-[0.5px] border-borderColor
        ${selected ? "bg-selected" : active ? "bg-active" : "bg-white"}
        `}
    >
      <p
        className={`${
          selected || active ? "text-white" : "text-black"
        } text-[10px]`}
      >
        {x},{y}
      </p>
    </button>
  );
};

export default GridCell;
