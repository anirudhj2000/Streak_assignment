"use client";
import React, { useEffect } from "react";
import GridCell from "./GridCell";
import { GridInterface, PointInterface } from "@/utils/types";

const Grid = ({
  rows = 20,
  columns = 20,
  onClickCell,
  selected,
  active,
}: GridInterface) => {
  useEffect(() => {
    console.log("selected", selected);
  }, [selected]);

  return (
    <div className={` w-full grid grid-cols-[repeat(20,3vh)] gap-3`}>
      {[...Array(rows * columns)].map((_, index) => (
        <GridCell
          key={index}
          x={index % columns}
          y={Math.floor(index / columns)}
          selected={selected.some(
            (point) =>
              point?.x === index % columns &&
              point?.y === Math.floor(index / columns)
          )}
          active={active.some(
            (point) =>
              point?.x === index % columns &&
              point?.y === Math.floor(index / columns)
          )}
          onClick={() => {
            onClickCell(index % columns, Math.floor(index / columns));
          }}
        />
      ))}
    </div>
  );
};

export default Grid;
