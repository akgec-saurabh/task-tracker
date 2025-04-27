import { Project } from "../models/project.model.js";

const createProject = async (project) => {
  const newProject = await Project.create(project);
  return newProject;
};

export { createProject };
