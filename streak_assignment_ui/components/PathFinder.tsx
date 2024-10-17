"use client";
import React, { useState, useEffect, use } from "react";
import Grid from "./Grid";
import { PointInterface } from "@/utils/types";
import GridCell from "./GridCell";

const testPath = [
  { x: 0, y: 0 },
  { x: 1, y: 0 },
  { x: 2, y: 0 },
  { x: 3, y: 0 },
  { x: 4, y: 0 },
  { x: 5, y: 0 },
  { x: 6, y: 0 },
  { x: 7, y: 0 },
  { x: 8, y: 0 },
  { x: 9, y: 0 },
  { x: 10, y: 0 },
  { x: 11, y: 0 },
  { x: 12, y: 0 },
  { x: 13, y: 0 },
  { x: 14, y: 0 },
];

const PathFinder = () => {
  const [startPoint, setStartPoint] = useState<PointInterface | null>(null);
  const [endPoint, setEndPoint] = useState<PointInterface | null>(null);
  const [path, setPath] = useState<PointInterface[]>(testPath);

  const handleCellClick = (x: number, y: number) => {
    console.log(x, y);
    if (startPoint && startPoint.x === x && startPoint.y === y) {
      setStartPoint(null);
    } else if (endPoint && endPoint.x === x && endPoint.y === y) {
      setEndPoint(null);
    } else if (startPoint === null) {
      setStartPoint({ x, y });
    } else if (endPoint === null) {
      setEndPoint({ x, y });
    }
  };

  useEffect(() => {
    console.log("startPoint", startPoint);
    console.log("endPoint", endPoint);
  });

  return (
    <div className=" flex flex-col lg:flex-row items-center justify-between mt-[2.5vh] w-11/12 lg:w-10/12 text-black">
      <div className=" w-full lg:w-auto flex flex-col items-start justify-center">
        <h1 className="text-2xl font-bold text-start">
          Streak AI - Fullstack Assignment
        </h1>
        <p className="text-base text-start">By: Anirudh Joshi</p>

        <div className=" flex flex-col items-start justify-center border-[0.5px] border-borderColor w-full mt-8">
          <div className="flex flex-row items-center w-full justify-center border-b-[1px] border-borderColor">
            <div className=" w-1/2 flex flex-col items-center justify-center border-r-[1px] py-1 border-borderColor">
              <h2 className="text-base font-semibold ">Start Point</h2>
            </div>
            <div className=" w-1/2 flex flex-col items-center justify-center  text-black">
              {startPoint ? (
                <p>
                  {" "}
                  X : {startPoint.x}, Y : {startPoint.y}
                </p>
              ) : (
                <p> Not Selected</p>
              )}
            </div>
          </div>

          <div className="flex flex-row items-center w-full justify-center">
            <div className=" w-1/2 flex flex-col items-center justify-center border-r-[1px] py-1 border-borderColor">
              <h2 className="text-base font-semibold ">End Point</h2>
            </div>
            <div className=" w-1/2 flex flex-col items-center justify-center  text-black">
              {endPoint ? (
                <p>
                  {" "}
                  X : {endPoint.x}, Y : {endPoint.y}
                </p>
              ) : (
                <p> Not Selected</p>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center w-full justify-end mt-4 gap-x-2">
          <button
            className=" w-4/12 flex flex-col items-center justify-center border-[1px] text-red-400 py-1 border-red-400 "
            onClick={() => {
              setStartPoint(null);
              setEndPoint(null);
              setPath([]);
            }}
          >
            Reset
          </button>

          <button
            disabled={!startPoint || !endPoint}
            className={` w-4/12 flex flex-col items-center justify-center text-white py-1 border-[1px]  ${
              !startPoint || !endPoint
                ? "bg-gray-400 border-gray-400 cursor-not-allowed"
                : "bg-black border-black cursor-pointer"
            } `}
            onClick={() => {
              console.log("startPoint", startPoint);
              console.log("endPoint", endPoint);
            }}
          >
            Find Path
          </button>
        </div>

        {path.length > 0 ? (
          <div className="flex flex-col items-start justify-center mt-8 text-start">
            <h2 className="text-xl font-bold">Path</h2>
            <ol className=" list-decimal ml-4">
              {path.map((point, index) => (
                <li key={index}>
                  X : {point.x}, Y : {point.y}
                </li>
              ))}
            </ol>
          </div>
        ) : null}

        <div className="flex flex-col items-start justify-center mt-8 text-start">
          <h2 className="text-xl font-bold">Instructions</h2>
          <ul className="list-disc ml-4">
            <li>Select the start and end points of the path.</li>
            <li>To select a cell, click on it.</li>
            <li>To deselect a cell, click on it again.</li>
          </ul>
        </div>
      </div>
      <div className=" w-full lg:w-auto flex flex-col items-center justify-center ">
        <Grid
          onClickCell={handleCellClick}
          rows={20}
          columns={20}
          selected={
            startPoint && endPoint
              ? [startPoint, endPoint]
              : startPoint
              ? [startPoint]
              : endPoint
              ? [endPoint]
              : []
          }
          active={path}
        />
      </div>
    </div>
  );
};

export default PathFinder;
