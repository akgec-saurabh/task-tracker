"use client";
import React, { useState } from "react";
import Button from "./button";

function checkProjectName(projectName: string) {
  if (projectName.length < 3) {
    return "Project name must be at least 3 characters long";
  }
  return null;
}

export default function ProjectForm() {
  const [projectName, setProjectName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const error = checkProjectName(projectName);
    if (error) {
      setError(error);
      return;
    }
    console.log("Form submitted");
    setProjectName("");
  };
  return (
    <div>
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
    </div>
  );
}
