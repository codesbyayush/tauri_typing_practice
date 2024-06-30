import React, { memo } from "react";
import State from "./stats";
import TestParameters from "./test-setup";

interface Props {
  started: boolean;
  incorrect: boolean;
  areaRef: React.RefObject<HTMLDivElement> | null;
  // eslint-disable-next-line no-unused-vars
  handleKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  remainingText: string;
  completedText: string;
  inputText: string;
  errorIndex: number;
  duration: number;
  handleStart: () => void;
}

function TypingArea({
  started = false,
  incorrect = false,
  areaRef = null,
  handleKeyDown,
  remainingText = "",
  completedText = "",
  inputText = "",
  errorIndex = 0,
  duration = 0,
  handleStart,
}: Props) {
  return (
    <>
      <TestParameters />
      <div className="typing-box border-black/5 bg-slate-50/75 border-2 mx-8 rounded space-y-16 mt-32 mb-8 px-4 py-2 ">
        <div className="">
          <button
            type="button"
            className="bg-black text-white px-6 py-2 text-md font-semibold rounded mx-auto"
            disabled={started}
            onClick={started ? undefined : handleStart}
          >
            {started ? duration : "Start"}
          </button>
        </div>
        <div
          className={`${started ? " active" : ""}${
            incorrect ? " is-error" : ""
          }`}
          ref={areaRef}
          aria-label="text-box"
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="textbox"
        >
          <span className="cursor" />
          <div className="font-semibold text-xl text-balance w-full text-center leading-9 tracking-wider white flex flex-wrap items-center justify-center pb-8">
            {remainingText.split(" ").map((word, ind) => (
              <div key={word + String(ind)} className="inline">
                {word.split("").map((letter, index) => {
                  return <span key={letter + ind + index}>{letter}</span>;
                })}
                &nbsp;
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(TypingArea);
