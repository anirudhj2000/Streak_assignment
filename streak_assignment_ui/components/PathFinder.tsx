"use client";
import React, { useState, useEffect, use } from "react";
import Grid from "./Grid";
import { PointInterface } from "@/utils/types";
import GridCell from "./GridCell";

const PathFinder = () => {
  const [startPoint, setStartPoint] = useState<PointInterface | null>(null);
  const [endPoint, setEndPoint] = useState<PointInterface | null>(null);
  const [path, setPath] = useState<Array<PointInterface>>([]);

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

  //   we can also add the URL to the .env file and use axios to setup a complete API interface, I have added here due to time crunch
  const findPath = () => {
    if (startPoint && endPoint) {
      fetch("http://localhost:8080" + "/api/find-path", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ start: startPoint, end: endPoint }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.path.length === 0) {
            alert("No path found");
            return;
          }
          let arr = data.path.map((item: any) => {
            return { x: item[0], y: item[1] };
          });
          setPath(arr);
          console.log(data.path);
        });
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
              findPath();
            }}
          >
            Find Path
          </button>
        </div>

        {path.length > 0 ? (
          <div className="flex flex-col items-center w-full max-h-[40vh] overflow-y-scroll justify-start mt-8  text-start">
            <h2 className="text-xl font-bold">Path</h2>
            <div className=" grid grid-cols-6 gap-4 mt-2">
              {path.map((point, index) => {
                return (
                  <div
                    key={index}
                    className=" flex flex-col items-center justify-center"
                  >
                    <p className=" text-center text-[10px]">Step {index + 1}</p>
                    <GridCell
                      key={point.x + point.y}
                      x={point.x}
                      y={point.y}
                      selected={true}
                      active={true}
                      onClick={function (): void {
                        throw new Error("Function not implemented.");
                      }}
                    />
                  </div>
                );
              })}
            </div>
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
