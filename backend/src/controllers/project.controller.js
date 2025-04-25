import { createProject } from "../services/project.service";

const createProjectHandler = async (req, res) => {
  const { name } = req.body;

  const project = await createProject({
    name,
    createdBy: req.user._id,
  });
  res.status(201).json(project);
};

export { createProjectHandler };
