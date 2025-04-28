import { TaskProps } from "@/types/Task";
import React from "react";

export default function Task({ task }: { task: TaskProps }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md max-w-md">
      <h3 className="text-lg font-bold">{task.name}</h3>
      <p className="text-sm text-gray-500">{task.description}</p>
    </div>
  );
}
