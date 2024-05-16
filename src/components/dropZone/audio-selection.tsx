import React from "react";
import { SelectItem } from "../ui/select";
import { FILEEXTENSIONS } from "@/lib/consts";

type Props = {};

const AudioSelection = (props: Props) => {
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

export const AudioTabContent = () => {
  return (
    <div className="grid grid-cols-3 gap-2 w-fit">
      {FILEEXTENSIONS.audio.map((elt, i) => (
        <div key={i} className="col-span-1 text-center">
          <SelectItem value={elt} className="mx-auto">
            {elt}
          </SelectItem>
        </div>
      ))}
    </div>
  );
};

export default AudioSelection;
