"use client";
import React, { useReducer } from "react";
import Input from "./input";
import Button from "./button";
import Dialog from "./dialog";
import { useParams, useRouter } from "next/navigation";

type TaskState = {
  title: string;
  description: string;
};

type TaskAction = {
  type: string;
  payload: any;
};
const taskReducer = (state: TaskState, action: TaskAction) => {
  switch (action.type) {
    case "SET_TITLE":
      return { ...state, title: action.payload };
    case "SET_DESCRIPTION":
      return { ...state, description: action.payload };
    case "RESET":
      return { title: "", description: "" };
    default:
      return state;
  }
};

export default function TaskFormDialog({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const [taskState, dispatch] = useReducer(taskReducer, {
    title: "",
    description: "",
  });

  const router = useRouter();

  const { pid } = useParams();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!pid) {
      console.error("Project ID is required");
      return;
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks`, {
      method: "POST",
      body: JSON.stringify({ ...taskState, projectId: pid }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!response.ok) {
      console.error("Failed to create task");
    }
    const data = await response.json();
    dispatch({ type: "RESET", payload: "" });
    setIsOpen(false);
    router.refresh();
  };
  return (
    <Dialog isOpen={isOpen} setIsOpen={setIsOpen}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
        <Input
          label="Title"
          value={taskState.title}
          onChange={(e) =>
            dispatch({ type: "SET_TITLE", payload: e.target.value })
          }
        />
        <Input
          label="Description"
          value={taskState.description}
          onChange={(e) =>
            dispatch({ type: "SET_DESCRIPTION", payload: e.target.value })
          }
        />
        <Button type="submit">Add Task</Button>
      </form>
    </Dialog>
  );
}
