import {StaticRequire, StaticImageData} from "next/dist/shared/lib/get-img-props";
import React from "react";

export interface ProjectIconProps {
  src: string | StaticRequire | StaticImageData;
  alt: string;
}

export interface ToggleButtonProps {
  children: React.ReactNode;
}