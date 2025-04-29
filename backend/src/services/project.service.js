import { Project } from "../models/project.model.js";

const createProject = async (project) => {
  const newProject = await Project.create(project);
  return newProject;
};

const getProjects = async (userId) => {
  const projects = await Project.find({ createdBy: userId });
  return projects;
};

const getProjectById = async (id) => {
  const project = await Project.findById(id);
  return project;
};

export { createProject, getProjects, getProjectById };
