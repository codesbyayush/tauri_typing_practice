import React, { memo } from "react";

interface Props {
  title: string;
  value: number | string;
  symbol?: string;
}

function Stats({ title, value, symbol }: Props) {
  return (
    <div className="drop-shadow-sm bg-white rounded px-8 py-4 flex items-center justify-center font-medium text-center">
      <div className="text-uppercase ">{title}</div>

      <div className=" w-full text-end">
        <span>{value}</span>

        <span className="text-sm font-bold pl-1">{symbol ?? symbol}</span>
      </div>
    </div>
  );
}

export default memo(Stats);
