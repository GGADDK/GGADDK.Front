'use client'
import React, { useState } from "react";
import Image from "next/image";
import { ProjectIconProps, ToggleButtonProps } from "@/shared/components/LeftSidebar/interfaces";
import TempImage from "../../../../public/globe.svg";

const ToggleButton: React.FC<ToggleButtonProps> = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={()=>setIsOpen(!isOpen)}>Toggle</button>
      <div className="flex flex-col pl-8">
      {isOpen && children}
      </div>
    </div>
  )
}

const ProjectDetailSidebar: React.FC = () => {
  return (
    <div className="w-65 h-full border-r-1 box">
      <ToggleButton>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
      </ToggleButton>
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