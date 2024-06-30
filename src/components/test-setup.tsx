import React from "react";

type Props = {};

export default function TestParameters() {
  return (
    <div className="flex bg-slate-100 border-black/5 border-2 py-2 px-6 mx-auto w-min gap-4 rounded">
      <div>
        <ul className="flex gap-4">
          <li>Time</li>
          <li>Words </li>
          <li>Custom</li>
        </ul>
      </div>
      <div className="w-1.5 my-auto h-6 rounded bg-white"></div>
      <div>
        <ul className="flex gap-4 px-3">
          <li>15</li>
          <li>30</li>
          <li>45</li>
          <li>60</li>
        </ul>
      </div>
    </div>
  );
}
