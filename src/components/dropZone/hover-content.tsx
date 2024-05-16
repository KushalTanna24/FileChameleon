import React from "react";
import { LuFileSymlink } from "react-icons/lu";

type Props = {};

const HoverContent = (props: Props) => {
  return (
    <>
      <div className="justify-center flex text-6xl">
        <LuFileSymlink />
      </div>
      <h3 className="text-center font-medium text-2xl text-muted">
        Drop Files Here 😲
      </h3>
    </>
  );
};

export default HoverContent;
