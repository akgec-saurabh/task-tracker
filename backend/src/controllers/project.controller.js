import {
  createProject,
  getProjects,
  getProjectById,
} from "../services/project.service.js";

const createProjectHandler = async (req, res) => {
  const { name } = req.body;

  // check if number of projects are 4 then don't create more
  const projects = await getProjects(req.user._id);
  if (projects.length >= 4) {
    return res.status(400).json({ message: "You can only have 4 projects" });
  }

  const project = await createProject({
    name,
    createdBy: req.user._id,
  });

  res.status(201).json(project);
};

const getProjectsHandler = async (req, res) => {
  const projects = await getProjects(req.user._id);
  res.status(200).json(projects);
};

const getProjectByIdHandler = async (req, res) => {
  const project = await getProjectById(req.params.id);
  res.status(200).json(project);
};

export { createProjectHandler, getProjectsHandler, getProjectByIdHandler };
