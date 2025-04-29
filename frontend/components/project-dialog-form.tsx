"use client";
import React, { useContext, useState } from "react";
import Button from "./button";
import { CreateProjectContext } from "@/store/create-project";
import Dialog from "./dialog";

function checkProjectName(projectName: string) {
  if (projectName.length < 3) {
    return "Project name must be at least 3 characters long";
  }
  return null;
}

export default function ProjectDialogForm() {
  const { dialogOpen, setDialogOpen } = useContext(CreateProjectContext);
  const [projectName, setProjectName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const error = checkProjectName(projectName);
    if (error) {
      setError(error);
      return;
    }
    console.log("Form submitted");
    setProjectName("");
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/projects`,
      {
        method: "POST",
        body: JSON.stringify({ name: projectName }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    const data = await response.json();
    console.log(data);
  };
  return (
    <div>
      <Dialog isOpen={dialogOpen} setIsOpen={setDialogOpen}>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label htmlFor="projectName">Project Name</label>
          <input
            id="projectName"
            type="text"
            placeholder="Project Name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button onClick={() => {}}>Create Project</Button>
        </form>
      </Dialog>
    </div>
  );
}
