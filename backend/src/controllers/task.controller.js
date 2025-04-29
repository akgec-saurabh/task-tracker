import {
  createTask,
  deleteTask,
  getTasks,
  updateTask,
} from "../services/task.service.js";

const createTaskHandler = async (req, res) => {
  const { title, description, projectId } = req.body;
  const task = await createTask({ title, description, projectId });
  res.status(201).json(task);
};

const getTasksHandler = async (req, res) => {
  const tasks = await getTasks();
  res.status(200).json(tasks);
};

const updateTaskHandler = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const task = await updateTask(id, status);
  res.status(200).json(task);
};

const deleteTaskHandler = async (req, res) => {
  const { id } = req.params;
  const task = await deleteTask(id);
  res.status(200).json(task);
};

export {
  createTaskHandler,
  getTasksHandler,
  updateTaskHandler,
  deleteTaskHandler,
};
