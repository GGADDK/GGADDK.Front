import React from "react";
import Image from "next/image";
import { ProjectIconProps } from "@/shared/components/LeftSidebar/interfaces";
import TempImage from "../../../../public/globe.svg";

const ProjectDetailSidebar: React.FC = () => {
  return (
    <div className="w-65 h-full border-r-1 box">
      Details
    </div>
  )
}

const ProjectListSidebar: React.FC = () => {
  return (
    <div className="w-25 h-full border-r-1 box flex flex-col gap-5">
      <ProjectIcon src={TempImage} alt="Image"/>
      <ProjectIcon src={TempImage} alt="Image"/>
      Projects
    </div>
  )
}


const ProjectIcon: React.FC = ({ src, alt }: ProjectIconProps) => {
  return (
    <Image src={src} alt={alt} className="w-[3.75rem] h-[3.75rem]" />
  )
}

const LeftSidebar: React.FC = () => {
  return (
    <aside className="w-90 h-full flex">
      <ProjectListSidebar/>
      <ProjectDetailSidebar/>
    </aside>
  )
}

export default LeftSidebar;