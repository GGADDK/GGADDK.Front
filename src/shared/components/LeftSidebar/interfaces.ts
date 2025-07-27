import {StaticRequire, StaticImageData} from "next/dist/shared/lib/get-img-props";

export interface ProjectIconProps {
  src: string | StaticRequire | StaticImageData;
  alt: string;
}