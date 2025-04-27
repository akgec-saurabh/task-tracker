import { createTask } from "../services/task.service.js";

const createTaskHandler = async (req, res) => {
  const { title, description, projectId } = req.body;
  const task = await createTask({ title, description, projectId });
  res.status(201).json(task);
};

export { createTaskHandler };
