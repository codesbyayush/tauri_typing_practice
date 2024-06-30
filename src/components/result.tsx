import React, { memo } from "react";
import { ReloadIcon } from "./icons";
import State from "./stats";

interface Props {
  completedText: string;
  inputText: string;
  errorIndex: number;
  accuracy: number;
  wpm: number;
  showStats: boolean;
  handleReload: () => void;
}

function Result({
  completedText = "",
  inputText = "",
  errorIndex = 0,
  accuracy = 0,
  wpm = 0,
  showStats = false,
  handleReload,
}: Props) {
  return (
    <>
      <div className="flex my-2 mx-4 rounded flex-col items-center bg-slate-50 py-6 border-spacing-0.5 border-2">
        <div className="bg-black w-min rounded border-2 border-gray-900 flex">
          <h6 className="py-2 px-8 text-lg font-semibold text-center   border-2 bg-white rounded w-min">
            Result
          </h6>
          <button
            type="button"
            disabled={!showStats}
            className=" flex gap-3 items-center rounded py-2 px-6"
            onClick={handleReload}
          >
            <ReloadIcon />
            <span className="text-white text-lg">Reload</span>
          </button>
        </div>
        <div className="grid grid-rows-2 grid-cols-2 py-6 border-b-2 gap-4  w-full  px-4">
          <State title="WPM" value={wpm} />
          <State title="CPM" value={wpm * 5} />
          <State title="Errors" value={errorIndex} />
          <State title="Accuracy" value={accuracy} symbol="%" />
        </div>
        <div className="flex flex-col items-center justify-center  py-8">
          <h6 className="mb-8 py-2 bg-slate-200 border-2 border-black/5 px-4 rounded">
            Average Typing Speeds
          </h6>
          <div className="grid grid-cols-6 grid-rows-2 text-center gap-4">
            <span className="bg-red-300 rounded-sm py-1 col-span-2 px-4">
              0 - 20 Slow
            </span>
            <span className="bg-emerald-200 rounded-sm py-1 col-span-2 px-4">
              20 - 40 Average
            </span>
            <span className="bg-green-500 rounded-sm py-1 col-span-2 px-4">
              40 - 60 Fast
            </span>
            <span className="bg-blue-200 rounded-sm py-1 col-span-3">
              60 - 80 Professional
            </span>
            <span className="bg-purple-800/50 rounded-sm py-1 col-span-3">
              80 - 100+ Top
            </span>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 mt-8 mx-4 bg-gray-100/55 border-2 border-gray-100 shadow-sm">
        <h6 className="text-md font-extrabold underline py-2">Tips!</h6>
        <ul className="pl-6">
          <li className="text-sm list-disc">
            Word Per Minute <strong>(WPM)</strong> is measured by calculating
            how many words you can type in 1 minute.
          </li>
          <li className="text-sm list-disc">
            Character Per Minute <strong>(CPM)</strong> calculates how many
            characters are typed per minute.
          </li>
        </ul>
      </div>
    </>
  );
}

export default memo(Result);
