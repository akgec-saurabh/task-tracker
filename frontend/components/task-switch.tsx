"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface TaskSwitchProps {
  initialStatus: "pending" | "in-progress" | "completed";
  onStatusChange: (status: "pending" | "in-progress" | "completed") => void;
}

export default function TaskSwitch({
  initialStatus,
  onStatusChange,
}: TaskSwitchProps) {
  const [status, setStatus] = useState<"pending" | "in-progress" | "completed">(
    initialStatus
  );

  const handleStatusChange = () => {
    setStatus((prv) => {
      const newStatus =
        prv === "pending"
          ? "in-progress"
          : prv === "in-progress"
          ? "completed"
          : "pending";
      onStatusChange(newStatus);
      return newStatus;
    });
  };

  const position = status === "pending" ? 0 : status === "in-progress" ? 1 : 2;

  return (
    <div className="w-20">
      <button
        onClick={handleStatusChange}
        className="relative w-[54px] flex flex-col items-center"
      >
        <div className="border-2 border-gray-300 p-1 w-full h-5 rounded-full"></div>
        <div
          className={cn(
            "bg-blue-500 size-4 rounded-full absolute transition-all duration-300 top-[2px]",
            position === 0 && "left-[2px]",
            position === 1 && "left-[calc(50%-9px)]",
            position === 2 && "right-[2px]"
          )}
        ></div>
      </button>
      <label htmlFor="" className="text-xs ">
        {status}
      </label>
    </div>
  );
}
