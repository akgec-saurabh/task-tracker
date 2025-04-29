import AddTask from "@/components/add-task";
import Task from "@/components/task";
import TaskForm from "@/components/task-form";
import { TaskProps } from "@/types/Task";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import React from "react";
const Tasks = [
  {
    id: "1",
    name: "Task 1",
    description: "Task 1 description",
    status: "pending",
    completedAt: null,
    projectId: "1",
    createdAt: new Date(),
  },
  {
    id: "2",
    name: "Task 2",
    description: "Task 2 description",
    status: "in-progress",
    completedAt: null,
    projectId: "1",
    createdAt: new Date(),
  },
  {
    id: "3",
    name: "Task 3",
    description: "lorem ipsum dolor sit amet",
    status: "completed",
    completedAt: new Date(),
    projectId: "1",
    createdAt: new Date(),
  },
];

const getTasks = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks`, {
    headers: {
      Authorization: `Bearer ${(await cookies()).get("accessToken")?.value}`,
    },
  });
  if (!response.ok) {
    console.error("Failed to fetch tasks");
    return [];
  }
  const data = await response.json();
  return data;
};

const getProjectById = async (pid: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/projects/${pid}`,
    {
      headers: {
        Authorization: `Bearer ${(await cookies()).get("accessToken")?.value}`,
      },
    }
  );
  const data = await response.json();
  return data;
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ pid: string }>;
}) {
  const { pid } = await params;
  const project = await getProjectById(pid);
  const tasks = await getTasks();
  if (!project) {
    return notFound();
  }
  return (
    <div className="space-y-4 flex flex-col gap-4 justify-center items-center">
      <h1 className="text-2xl font-bold text-center">
        Project: {project.name}
      </h1>
      <AddTask />
      <div className="flex flex-col gap-4 w-full items-center">
        {tasks?.map((task: TaskProps) => (
          <Task key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
}
