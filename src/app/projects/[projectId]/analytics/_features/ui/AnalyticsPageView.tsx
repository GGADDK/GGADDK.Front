'use client';
import React from 'react';
import {useParams} from "next/navigation";

const AnalyticsPageView: React.FC = () => {
  const projectId = useParams().projectId;
  return (
    <>
      ProjectIdPageView
      {projectId}
    </>
  )
}

export default AnalyticsPageView;