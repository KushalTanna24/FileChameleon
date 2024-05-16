import React from "react";
import { LuFileUp } from "react-icons/lu";

type Props = {};

const HoverContent = (props: Props) => {
  return (
    <>
      <div className="justify-center flex text-6xl">
        <LuFileUp />
      </div>
      <h3 className="text-center font-medium text-2xl">
        Click, or drag and drop file here
      </h3>
    </>
  );
};

export default HoverContent;
