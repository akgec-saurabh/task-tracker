"use client";
import { TaskProps } from "@/types/Task";
import React from "react";
import TaskSwitch from "./task-switch";

export default function Task({ task }: { task: TaskProps }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md max-w-md flex items-center justify-between my-4">
      <div>
        <h3 className="text-lg font-bold">{task.name}</h3>
        <p className="text-sm text-gray-500">{task.description}</p>
      </div>
      <TaskSwitch
        initialStatus={task.status as "pending" | "in-progress" | "completed"}
        setStatus={() => {}}
      />
    </div>
  );
}
