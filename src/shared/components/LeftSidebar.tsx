import React from "react";

const ProjectDetailSidebar: React.FC = () => {
  return (
    <div className="w-65 h-full border-r-1 box">
      Details
    </div>
  )
}

const ProjectListSidebar: React.FC = () => {
  return (
    <div className="w-25 h-full border-r-1 box">
      Projects
    </div>
  )
}

const LeftSidebar: React.FC = () => {
  return (
    <aside className="w-90 h-full flex">
      <ProjectListSidebar />
      <ProjectDetailSidebar />
    </aside>
  )
}

export default LeftSidebar;