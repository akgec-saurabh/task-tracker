"use client";
import { PlusIcon } from "@heroicons/react/24/outline";
import Button from "./button";
import { useState } from "react";
import TaskForm from "./task-form";
export default function AddTask() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-center items-center">
      <Button onClick={() => setIsOpen(true)}>
        <PlusIcon /> Add Task
      </Button>
      <TaskForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
