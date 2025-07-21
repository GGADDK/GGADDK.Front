'use client';
import React from 'react';
import {useParams} from "next/navigation";

const ProjectIdPageView: React.FC = () => {
  const projectId = useParams().projectId;
  return (
    <>
      ProjectIdPageView
      {projectId}
    </>
  )
}

export default ProjectIdPageView;