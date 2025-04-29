"use client";
import { TaskProps } from "@/types/Task";
import React from "react";
import TaskSwitch from "./task-switch";
import Button from "./button";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { formatDate } from "date-fns";
export default function Task({ task }: { task: TaskProps }) {
  const router = useRouter();
  const handleStatusChange = async (
    status: "pending" | "in-progress" | "completed"
  ) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/tasks/${task._id}`,
      {
        method: "PUT",
        body: JSON.stringify({ status }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    const data = await response.json();
    console.log(data);
  };

  const handleDelete = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/tasks/${task._id}`,
      {
        method: "DELETE",
        credentials: "include",
      }
    );
    const data = await response.json();
    if (response.ok) {
      router.refresh();
    }
  };
  return (
    <div className="bg-white p-4 rounded-lg shadow-md max-w-xl flex items-center w-full justify-between">
      <div className="flex flex-col gap-2">
        <div>
          <h3 className="text-lg font-bold">{task.title}</h3>
          <p className="text-sm text-gray-500">{task.description}</p>
        </div>

        {task.status === "completed" && (
          <p className="text-sm text-gray-500">
            Completed at: {formatDate(task.updatedAt, "dd MMM yyyy")}
          </p>
        )}
        <p className="text-sm text-gray-500">
          Created at: {formatDate(task.createdAt, "dd MMM yyyy")}
        </p>
      </div>
      <TaskSwitch
        initialStatus={task.status as "pending" | "in-progress" | "completed"}
        onStatusChange={handleStatusChange}
      />
      <Button variant="danger" size="icon" onClick={handleDelete}>
        <Trash className="w-4 h-4" />
      </Button>
    </div>
  );
}
