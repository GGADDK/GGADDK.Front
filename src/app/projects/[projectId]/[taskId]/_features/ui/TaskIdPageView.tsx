'use client';
import React from 'react';
import {useParams} from "next/navigation";

const TaskIdPageView: React.FC = () => {
  const taskId = useParams().taskId;
  return (
    <>
      TaskIdPageView
      {taskId}
    </>
  )
}

export default TaskIdPageView;