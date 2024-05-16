import { FILEEXTENSIONS } from "@/lib/consts";
import React from "react";
import { SelectItem } from "../ui/select";

type Props = {};

export const ImageTabContent = () => {
  return <></>;
};
export const ImageSelection = (props: Props) => {
  return (
    <div className="grid grid-cols-2 gap-2 w-fit">
      {FILEEXTENSIONS.image.map((elt, i) => (
        <div key={i} className="col-span-1 text-center">
          <SelectItem value={elt} className="mx-auto">
            {elt}
          </SelectItem>
        </div>
      ))}
    </div>
  );
};

export default ImageSelection;
