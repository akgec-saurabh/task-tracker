import Task from "@/components/task";
import React from "react";

const Tasks = [
  {
    id: "1",
    name: "Task 1",
    description: "Task 1 description",
    status: "pending",
    completedAt: null,
    projectId: "1",
  },
  {
    id: "2",
    name: "Task 2",
    description: "Task 2 description",
    status: "in-progress",
    completedAt: null,
    projectId: "1",
  },
  {
    id: "3",
    name: "Task 3",
    description: "lorem ipsum dolor sit amet",
    status: "completed",
    completedAt: new Date(),
    projectId: "1",
  },
];

export default function ProjectPage() {
  return (
    <div>
      <h1>ProjectPage</h1>
      <div>
        {Tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
