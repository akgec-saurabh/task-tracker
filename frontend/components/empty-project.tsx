import { Plus } from "lucide-react";
import React from "react";

export default function EmptyProject() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex flex-col items-center justify-center">
          <Plus className="size-10" />
          <p className="text-sm text-gray-500">Create a new project</p>
        </div>
      </div>
    </div>
  );
}
