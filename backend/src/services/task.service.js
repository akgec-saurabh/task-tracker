import { Task } from "../models/task.model.js";

const getTaskById = async (taskId) => {
  const task = await Task.findById(taskId);
  return task;
};

const getTasks = async () => {
  const tasks = await Task.find();
  return tasks;
};

const updateTask = async (taskId, status) => {
  const task = await Task.findByIdAndUpdate(taskId, { status }, { new: true });
  return task;
};

const deleteTask = async (taskId) => {
  const task = await Task.findByIdAndDelete(taskId);
  return task;
};

const createTask = async ({ title, description, projectId }) => {
  const newTask = await Task.create({ title, description, projectId });
  return newTask;
};

export { createTask, getTasks, updateTask, deleteTask };
