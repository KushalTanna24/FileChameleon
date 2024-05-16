import { FILEEXTENSIONS } from "@/lib/consts";
import React from "react";
import { SelectItem } from "../ui/select";

type Props = {};

export const VideoTabContent = () => {
  return (
    <div className="grid grid-cols-3 gap-2 w-fit">
      {FILEEXTENSIONS.video.map((elt, i) => (
        <div key={i} className="col-span-1 text-center">
          <SelectItem value={elt} className="mx-auto">
            {elt}
          </SelectItem>
        </div>
      ))}
    </div>
  );
};
export const VideoSelection = (props: Props) => {
  return <></>;
};

export default VideoSelection;
